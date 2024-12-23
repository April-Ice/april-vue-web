let code1 = ` 
.text11 {
    background: #434d56;
    color: #8c99a6;
    text-shadow: 0 -1px 1px black;
}`;
let code2 = ` 
.text12 {
    background: #191919;
    color: #ffc;
    text-shadow: 0 0 .1em, 0 0 .3em;
}`;
let code3 = ` 
.text13 {
    color: #fff;
    background: hsl(0, 50%, 45%);
    text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black;
}`;
let code4 = ` 
.text21 {
    background-color: #fff;
    p {
        font-weight: bold;
        font-size: 1.4em;
        color: transparent;
        background-color: #000;
        text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px, rgba(255, 255, 255, 0.2) 1px 3px 3px;
        -webkit-background-clip: text;
    }
}`;
let code5 = ` 
.text31 {
    background: #191919;
}

.text31>p {
    background: -webkit-linear-gradient(90deg, #111, #fff) 0 0 no-repeat;
    -webkit-background-size: 1em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.3);
    -webkit-animation: slideShine 3s infinite;
}

@keyframes slideShine {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 100%;
    }
}`;
let code6 = ` 
.text41 {
    color: #000;
    animation-name: fadeIn;
    /*动画名称*/
    animation-duration: 5s;
    /*动画持续时间*/
    animation-iteration-count: 1000;
    /*动画次数*/
    animation-delay: 0s;
    /*延迟时间*/
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}`;

let clipText = `
.clipText {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke:1px #fff;

  background: #40E0D0 linear-gradient(to right, #FF0080, #FF8C00, #40E0D0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-size: 2.4em;
}`

let zebraText = `
.zebraText {
  background-image: -webkit-linear-gradient(crimson 50%, white 50%);
  background-position: 0 0;
  -webkit-background-clip: text;
  background-size: 100% 1.6rem;
  background-repeat: repeat;
  animation: stripes 3s linear infinite;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
}

@keyframes stripes {
  100% {
      background-position: 0 -6rem;
  }
}`

const code8 = `
.moveText {
    background-image: linear-gradient(90deg, #f66, #f90);
    background-clip: text;
    color: transparent;
    animation: hue 5s linear infinite;
    font-weight: bold;
}

@keyframes hue {
    from {
        filter: hue-rotate(0);
    }

    to {
        filter: hue-rotate(-1turn);
    }
}
`

export default {
    "code1": code1,
    "code2": code2,
    "code3": code3,
    "code4": code4,
    "code5": code5,
    "code6": code6,
    "clipText": clipText,
    "zebraText": zebraText,
    "code8": code8,

};