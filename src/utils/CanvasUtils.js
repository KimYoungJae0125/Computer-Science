const pathCheck = (path) => 
    window.location.href.indexOf(path) !== -1 && window.location.href.indexOf(path) === window.location.href.lastIndexOf(path);

const toRadian = (d) => (d * Math.PI) / 180;

const canvasScaling = (canvasId, size) => {
    const [width, height] = size;
    const canvas = document.getElementById(canvasId);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const context = canvas.getContext('2d');

    const dpr = window.devicePixelRatio;
    // canvas.width = width * dpr;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    context.scale(dpr, dpr);

    return context;
}

const drawingCircle = (context, arcInfo, color) => {
    let {x, y, text} = arcInfo;
    if(!color) color = 'white';
    context.beginPath();
    context.arc(x, y, 25, 0, toRadian(360), true);
    context.fillStyle = color;
    context.fill();
    context.stroke();
    
    context.font = '13px malgun gothic'
    context.fillStyle = 'black';
    if(Number(text) >= 10) {
        x -= 2;
    }
    context.fillText(text, x-4, y+5);
}

const drawingLine = (context, lineLocationInfo) => {
    const {startX, startY, endX, endY} = lineLocationInfo;
    context.save();
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.strokeStyle = '#C2BFAF';
    context.stroke();
    // context.closePath();
    context.restore();
}

const drawingArrowLine = (context, lineLocationInfo) => {
    drawingLine(context, lineLocationInfo)
    const {startX, startY, endX, endY} = lineLocationInfo;

    const [arrowWidth, arrowHeight] = [5, 12];
    const [drawingX, drawingY] = [endX - startX, endY - startY];
    const angle = Math.atan2(drawingY, drawingX);
    const length = Math.sqrt(drawingX * drawingX + drawingY * drawingY);

    //두점 선긋기
    context.translate(startX, startY);
    context.rotate(angle);
    context.beginPath();

    //화살표 모양 만들기
    context.moveTo(length - arrowHeight, -arrowWidth);
    context.lineTo(length, 0);
    context.lineTo(length - arrowHeight, arrowWidth);

    context.fillStyle = '#C2BFAF';
    context.fill();
    // context.setTransform(1, 0, 0, 1, 0, 0);
    const dpr = window.devicePixelRatio;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    // context.closePath();
}

const drawingWeightText = (context, weightInfo) => {
    const {x, y, text} = weightInfo;

    context.fillStyle = 'white';
    context.font = '20px malgun gothic';
    context.fillText(text, x, y);
}

export {pathCheck, canvasScaling, drawingCircle, drawingLine, drawingArrowLine, drawingWeightText};