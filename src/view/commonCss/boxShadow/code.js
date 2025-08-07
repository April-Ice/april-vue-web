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
    code4: `
    .tecBorderBox {
        background-color: #040334;
        position: relative;
        padding: 8px 6px 4px;
        border: 3.12px solid rgba(0, 251, 251, 0.6);
        overflow: hidden; /* 隐藏溢出光效 */
        .trapezoid {
            position: absolute;
            background: #80d5ff;
            animation: border-flash 0.5s linear forwards;
        }

        @keyframes border-flash {
            0%,
            100% {
            opacity: 0.8;
            filter: brightness(1);
            }
            20%,
            80% {
            opacity: 1;
            filter: brightness(3);
            // box-shadow: 0 0 4px #80d5ff;
            box-shadow: 0 0 4px rgb(128 213 255, 0.5);
            }
        }
        /* 四边依次动画 */
        .top {
            animation-delay: 0s;
        }
        .right {
            animation-delay: 0.1s;
        }
        .bottom {
            animation-delay: 0.2s;
        }
        .left {
            animation-delay: 0.3s;
        }

        /* 顶部梯形 */
        .top {
            top: -2px;
            left: 25%;
            width: 50%; /* 边框长度的一半 */
            height: 6px;
            clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
        }

        /* 右侧梯形 */
        .right {
            top: 25%;
            right: -2px;
            width: 6px;
            height: 50%;
            clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%);
        }

        /* 底部梯形 */
        .bottom {
            bottom: -2px;
            left: 25%;
            width: 50%;
            height: 6px;
            clip-path: polygon(5% 0, 95% 0, 100% 100%, 0 100%);
        }

        /* 左侧梯形 */
        .left {
            top: 25%;
            left: -2px;
            width: 6px;
            height: 50%;
            clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
        }
    }
    `
};

export default codeObj