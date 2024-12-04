let code1 = ` 
.halfBg {
  background: linear-gradient(to bottom, #ff0 0%, #ff0 50%, #000 50.01%, #000 100%)
}`;

let code2 = ` 
.moveBg {
  color: #fff;
  height: 100%;
  background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left center/400% 400%;
  animation: move 10s infinite;
}

@keyframes move {
  0%,
  100% {
      background-position-x: left;
  }
  50% {
      background-position-x: right;
  }
}`;

let code3 = `.stripeBg{
    background: repeating-linear-gradient(-45deg,#00aaa6,#00aaa6 10px,#52d0cd 0,#52d0cd 20px);
}`
export default {
  "code1": code1,
  "code2": code2,
  "code3": code3,
};