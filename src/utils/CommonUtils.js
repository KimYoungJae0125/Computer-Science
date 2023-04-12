const prefix = process.env.NODE_ENV === 'production' ? '/Computer-Science' : '';

const getPath = (path) => prefix + path;


export default getPath;
