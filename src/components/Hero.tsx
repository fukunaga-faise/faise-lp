// ファーストビュー。背景画像は使わず、AmbientBackground の上に文字だけを置きます。
// 位置を微調整したいときは、下の4つの数字を書き換えてください。

const LEFT = "5.4vw"; // 左端からの余白
const BOTTOM = "7vh"; // 下端からの余白(PC)
const BOTTOM_MOBILE = "15vh"; // 下端からの余白(スマホ)。サブコピーが2行になりScrollと重なるため広げてある
const HEIGHT = "78svh"; // ヒーローの高さ(PC)
const HEIGHT_MOBILE = "72svh"; // ヒーローの高さ(スマホ)。スクロールを短くしたいときはここを下げる

const css = `
.faise-hero{
  position:relative;
  min-height:${HEIGHT};
  display:flex;
  align-items:flex-end;
}
.faise-hero-copy{
  padding:0 0 ${BOTTOM} ${LEFT};
  max-width:min(970px,92vw);
}
@media (max-width:767px){
  .faise-hero{
    min-height:${HEIGHT_MOBILE};
  }
  .faise-hero-copy{
    padding-bottom:${BOTTOM_MOBILE};
  }
}
.faise-hero-eyebrow{
  display:flex;
  align-items:center;
  gap:9px;
  margin:0 0 26px;
  font-size:12px;
  letter-spacing:.14em;
  font-weight:600;
  color:#5A5A6B;
}
.faise-hero-eyebrow::before{
  content:"";
  width:7px;height:7px;
  border-radius:50%;
  background:#27CBCF;
}
.faise-hero h1{
  margin:0;
  white-space:nowrap;
  font-size:clamp(30px,5.6vw,88px);
  font-weight:700;
  line-height:1.42;
  letter-spacing:.005em;
  color:#0B0B12;
}
.faise-hero-sub{
  margin:26px 0 0;
  font-size:12px;
  line-height:1.8;
  letter-spacing:.06em;
  color:#5A5A6B;
}
.faise-hero-scroll{
  position:absolute;
  right:${LEFT};
  bottom:${BOTTOM};
  display:flex;
  align-items:center;
  gap:10px;
  font-size:11px;
  letter-spacing:.2em;
  color:#5A5A6B;
}
.faise-hero-scroll::after{
  content:"";
  width:1px;height:52px;
  background:linear-gradient(#5A5A6B,rgba(90,90,107,0));
}

.faise-rise{
  opacity:0;
  transform:translateY(18px);
  animation:faiseRise .9s cubic-bezier(.22,.7,.24,1) forwards;
}
.faise-d1{animation-delay:.05s}
.faise-d2{animation-delay:.18s}
.faise-d3{animation-delay:.34s}
.faise-d4{animation-delay:.5s}
@keyframes faiseRise{
  to{opacity:1;transform:translateY(0)}
}
@media (prefers-reduced-motion:reduce){
  .faise-rise{opacity:1;transform:none;animation:none}
}
`;

export default function Hero() {
  return (
    <section className="faise-hero" id="hero">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="faise-hero-copy">
        <p className="faise-hero-eyebrow faise-rise faise-d1">
          Experience Design Marketing
        </p>
        <h1 className="faise-rise faise-d2">
          人が集まる理由を、
          <br />
          設計する。
        </h1>
        <p className="faise-hero-sub faise-rise faise-d3">
          ブランド、体験、マーケティング。
          <br />
          集客施設の成長を、一気通貫で支援します。
        </p>
      </div>
      <div className="faise-hero-scroll faise-rise faise-d4" aria-hidden="true">
        Scroll
      </div>
    </section>
  );
}
