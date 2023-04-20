const pathCheck = (path) => 
    window.location.href.indexOf(path) !== -1 && window.location.href.indexOf(path) === window.location.href.lastIndexOf(path);

const toRadian = (d) => (d * Math.PI) / 180;

const canvasScaling = (canvasId) => {
    const [width, height] = [300, 200];
    const canvas = document.getElementById(canvasId);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const context = canvas.getContext('2d');

    const dpr = window.devicePixelRatio;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    context.scale(dpr, dpr);

    return context;
}

const drawingCircle = (context, ArcInfo) => {
    const {x, y, text} = ArcInfo;
    context.beginPath();
    context.arc(x, y, 25, 0, toRadian(360), true);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    
    context.font = '13px malgun gothic'
    context.fillStyle = 'black';
    context.fillText(text, x-4, y+5);
}

const drawingLine = (context, lineLocationInfo) => {
    const {startX, startY, endX, endY} = lineLocationInfo;
    context.save();
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
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

    context.fill();
    // context.setTransform(1, 0, 0, 1, 0, 0);
    const dpr = window.devicePixelRatio;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    // context.closePath();
}

const drawingGraph = (canvasId, arcInfoList, lineInfoList) => {
    const context = canvasScaling(canvasId);

    arcInfoList.forEach(info => drawingCircle(context, info));
    lineInfoList.filter((v,i) => i<4).forEach(info => drawingLine(context, info))
}

const drawingDirectedGraph = (canvasId, arcInfoList, lineInfoList) => {
    const context = canvasScaling(canvasId);

    arcInfoList.forEach(info => drawingCircle(context, info));
    lineInfoList.filter((v,i) => i<4).forEach(info => drawingArrowLine(context, info))
}
const drawingComplteGraph = (canvasId, arcInfoList, lineInfoList) => {
    const context = canvasScaling(canvasId);

    arcInfoList.forEach(info => drawingCircle(context, info));
    lineInfoList.forEach(info => drawingLine(context, info))
}

const drawingDirectedComplteGraph = (canvasId, arcInfoList, lineInfoList) => {
    const context = canvasScaling(canvasId);

    arcInfoList.forEach(info => drawingCircle(context, info));
    const reverseLineList = [];
    lineInfoList.forEach(info => {
        drawingArrowLine(context, info)
        reverseLineList.push({startX: info.endX, startY: info.endY, endX: info.startX, endY: info.startY});
    })
    reverseLineList.forEach(info => drawingArrowLine(context, info))
}

const setTransform = (canvasId, scalingRatio) => {
    const context = document.getElementById(canvasId).getContext('2d');

    context.setTransform(scalingRatio, 0, 0, scalingRatio, 0, 0);
}

export {pathCheck, drawingGraph, drawingDirectedGraph, drawingComplteGraph, drawingDirectedComplteGraph, setTransform};