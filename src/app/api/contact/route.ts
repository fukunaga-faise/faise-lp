import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, company, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: '必須項目を入力してください' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Faise LP <onboarding@resend.dev>',
      to: 'fukunaga@faise-inc.com',
      replyTo: email,
      subject: `【無料相談】${company || name} 様よりお問い合わせ`,
      text: `
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
