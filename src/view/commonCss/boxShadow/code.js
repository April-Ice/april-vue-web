let codeObj = {
    cornerBox: `
    @borderWidth: 3px;
    @boxWidth: 90%;
    @boxHeight: 100px;
    @borderCorner: 20px;
    @borderColor: #74e448;

    .cornerBox {
        background: #f5f7f4;
        border: @borderWidth solid rgb(10, 10, 10);
        width: @boxWidth;
        height: @boxHeight;
        position: absolute;
    }

    //上下
    .cornerBox:before {
        content: '';
        position: absolute;
        width: calc(100% - 2*@borderCorner);
        height: @boxHeight;
        top: -@borderWidth;
        left: @borderCorner;
        border-bottom: @borderWidth solid @borderColor;
        border-top: @borderWidth solid @borderColor;
    }

    //左右
    .cornerBox:after {
        content: '';
        position: absolute;
        width: calc(100% + 2*@borderWidth);
        height: calc(100% - 2 * @borderCorner);
        right: -@borderWidth;
        top: @borderCorner;
        border-left: @borderWidth solid @borderColor;
        border-right: @borderWidth solid @borderColor;
    }



    .translucent-border-1 {
        box-sizing: border-box;
        height: 100px;
        line-height: 100px;


        background: rgb(84, 182, 212);
        background-clip: padding-box;
        border: 10px dashed rgba(21, 204, 61, 0.5);
        line-height: 80px;
    }
    `,
    translucentBox: `
    .translucentBox {
        box-sizing: border-box;
        height: 100px;
        line-height: 100px;
    
        background: rgb(84, 182, 212);
        background-clip: padding-box;
        border: 10px dashed rgba(21, 204, 61, 0.5);
        line-height: 80px;
      }
    `,
    code3: `
    .radiusCorner {
        filter: drop-shadow(0 0 3px #666);
        background-size: 70% 70%;
        background-image: 
            radial-gradient(circle at 100% 100%, transparent 0, transparent 2vw, #03A9F5 2vw),
            radial-gradient(circle at 0 0, transparent 0, transparent 2vw, #03A9F5 2vw),
            radial-gradient(circle at 100% 0, transparent 0, transparent 2vw, #03A9F5 2vw),
            radial-gradient(circle at 0 100%, transparent 0, transparent 2vw, #03A9F5 2vw);
        background-repeat: no-repeat;
        background-position: right bottom, left top, right top, left bottom;
    }
    `,
};

export default codeObj