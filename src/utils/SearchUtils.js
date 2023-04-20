import { drawingCircle } from '@/utils/CanvasUtils.js'

const findNode = (arcInfoList, nodeValue) => {
    return arcInfoList.find(info => info.text == nodeValue) ;  
}

const dfs = (arcInfoList, node, index, context) => {
    if(node == null) return;

    setTimeout(() => {
        drawingCircle(context, node, 'aqua');
    }, index[0]*1000);

    ++index[0];
    node.children.forEach(childValue => dfs(arcInfoList, findNode(arcInfoList, childValue), index, context));

}

const bfs = (arcInfoList, startValue, context) => {
    const visited = {};
    let arcInfo = findNode(arcInfoList, startValue);
    const queue = [];
    queue.push(arcInfo);
    visited[arcInfo.text] = true;
    let index = 0;
    while(queue.length != 0) {
        const info = queue.shift();
        setTimeout(() => {
            drawingCircle(context, info, 'aqua');
        }, ++index*1000);
        visited[info.text] = true;
        info.parents.filter(value => !visited[value]).forEach(value => queue.push(findNode(arcInfoList, value)));
        info.children.filter(value => !visited[value]).forEach(childValue => queue.push(findNode(arcInfoList, childValue)));
    }

}

export {dfs, bfs}