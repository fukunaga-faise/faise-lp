// サイト全体の背景アニメーション(マーキー/流れる英字)
//
// 調整したいときは、この4つの設定だけ書き換えてください。
// ほかの部分は触らなくて大丈夫です。

const OPACITY = 0.13; // 濃さ。0 〜 1。0.1 = 10%
const SPEED = 1; // 速さ。1 が標準。0.5 で半分の速さ、2 で倍速
const SHOW_WASH = true; // グラデーションの光を重ねるか。false にすると文字だけ

// 流れる文字。2行それぞれ好きな文言に変えられます。
// 途切れて見えないよう、1行のなかで文言を2回以上くり返してください
const LINES = [
  "EXPERIENCE DESIGN MARKETING / EXPERIENCE DESIGN MARKETING / ",
  "FAISE INC. — FAISE INC. — FAISE INC. — ",
];

const css = `
.faise-amb{
  position:fixed;
  inset:0;
  z-index:-10;
  overflow:hidden;
  pointer-events:none;
}
.faise-wash{position:absolute;inset:0;opacity:.5}
.faise-wash i{position:absolute;display:block;border-radius:50%;will-change:transform}
.faise-wash .fw1{
  width:86vmax;height:86vmax;right:-32vmax;top:-36vmax;
  background:radial-gradient(circle at 50% 50%,
    rgba(39,203,207,.55) 0%,
    rgba(31,168,222,.24) 34%,
    rgba(31,168,222,.07) 58%,
    rgba(31,168,222,0) 76%);
  animation:faiseW1 30s ease-in-out infinite;
}
.faise-wash .fw2{
  width:92vmax;height:66vmax;left:-28vmax;top:14vmax;
  background:radial-gradient(ellipse at 50% 50%,
    rgba(31,168,222,.48) 0%,
    rgba(47,146,214,.20) 34%,
    rgba(47,146,214,.06) 58%,
    rgba(47,146,214,0) 78%);
  animation:faiseW2 38s ease-in-out infinite;
}
@keyframes faiseW1{
  0%,100%{transform:translate3d(0,0,0) scale(1)}
  50%{transform:translate3d(-14vmax,8vmax,0) scale(1.12)}
}
@keyframes faiseW2{
  0%,100%{transform:translate3d(0,0,0) scale(1.05)}
  50%{transform:translate3d(12vmax,-7vmax,0) scale(.93)}
}

.faise-mq{
  position:absolute;left:0;right:0;top:16vh;
  display:flex;flex-direction:column;gap:2.2vh;
  opacity:${OPACITY};
}
.faise-row{display:flex;width:max-content;will-change:transform}
.faise-row span{
  padding-right:.28em;
  white-space:nowrap;
  font-size:clamp(48px,9.5vw,116px);
  line-height:1.04;
  font-weight:800;
  letter-spacing:-.02em;
  background:linear-gradient(100deg,#27CBCF 0%,#1FA8DE 52%,#2F92D6 100%);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}
.faise-row.faise-out span{
  background:none;
  color:transparent;
  -webkit-text-stroke:2px #1FA8DE;
}
.faise-r1{animation:faiseLeft ${(40 / SPEED).toFixed(1)}s linear infinite}
.faise-r2{animation:faiseRight ${(54 / SPEED).toFixed(1)}s linear infinite}
@keyframes faiseLeft{
  from{transform:translate3d(0,0,0)}
  to{transform:translate3d(-50%,0,0)}
}
@keyframes faiseRight{
  from{transform:translate3d(-50%,0,0)}
  to{transform:translate3d(0,0,0)}
}
@media (prefers-reduced-motion:reduce){
  .faise-row,.faise-wash i{animation:none}
}
`;

export default function AmbientBackground() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="faise-amb" aria-hidden="true">
        {SHOW_WASH && (
          <div className="faise-wash">
            <i className="fw1" />
            <i className="fw2" />
          </div>
        )}
        <div className="faise-mq">
          {LINES.map((text, i) => (
            <div
              key={i}
              className={`faise-row faise-r${i + 1}${i === 1 ? " faise-out" : ""}`}
            >
              <span>{text}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
