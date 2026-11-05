// 公開中のURLを IndexNow（Bing など）に送り、更新をすぐ知らせる。
// デプロイ後に実行: node scripts/indexnow.mjs [URL...]（引数なしなら sitemap.xml の全URL）
const HOST = 'www.faise-inc.com'
const KEY = '7428b023ade8c000205a4fd9adf172d0' // public/7428b023ade8c000205a4fd9adf172d0.txt と同じ値

let urls = process.argv.slice(2)
if (urls.length === 0) {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
})
console.log(res.status, res.statusText, urls)
