import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { name, company, email, phone, message, page, referrer } = body
  const fromPage = typeof page === 'string' && page.startsWith('/') ? page.slice(0, 200) : '不明'
  const ref = typeof referrer === 'string' && referrer ? referrer.slice(0, 300) : 'なし（直接・不明）'
  const isClinic = /^(\/en)?\/clinic/.test(fromPage)
  const isEnglish = fromPage.startsWith('/en')
  // 海外ブランド向け「Japan Launch」LP のフォーム（項目が多く、ご相談内容は任意）
  const isJapanLaunch = body.inquiryType === 'japan-launch'
  const s = (v: unknown) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, 2000) : '未記入')

  if (!name || !email || (!message && !isJapanLaunch)) {
    return NextResponse.json({ error: '必須項目を入力してください' }, { status: 400 })
  }

  try {
    if (isJapanLaunch) {
      await resend.emails.send({
        from: 'Faise LP <onboarding@resend.dev>',
        to: 'fukunaga@faise-inc.com',
        replyTo: email,
        subject: `【Japan Launch${isEnglish ? '・英語' : ''}】${company || name} 様より Japan Fit Check のお申し込み`,
        text: `
問い合わせ種別: Japan Launch（海外ブランドの日本上陸支援）
問い合わせページ: ${fromPage}
参照元: ${ref}

お名前: ${name}
会社名・ブランド名: ${s(company)}
メールアドレス: ${email}
Webサイト: ${s(body.website)}
商品カテゴリ: ${s(body.category)}
クラウドファンディング・ストアURL: ${s(body.storeUrl)}
現在の販売国・地域: ${s(body.markets)}
ローンチ希望時期: ${s(body.timing)}

ご相談内容:
${s(message)}
        `.trim(),
      })
      return NextResponse.json({ success: true })
    }

    await resend.emails.send({
      from: 'Faise LP <onboarding@resend.dev>',
      to: 'fukunaga@faise-inc.com',
      replyTo: email,
      subject: `【無料相談${isClinic ? '・美容クリニック' : ''}${isEnglish ? '・英語' : ''}】${company || name} 様よりお問い合わせ`,
      text: `
問い合わせページ: ${fromPage}
参照元: ${ref}

お名前: ${name}
会社名・店舗名: ${company || '未記入'}
メールアドレス: ${email}
電話番号: ${phone || '未記入'}

お問い合わせ内容:
${message}
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: '送信に失敗しました' }, { status: 500 })
  }
}
