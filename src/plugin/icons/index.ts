import { readFileSync, readdirSync } from 'fs';

const svgTitle = /<svg([^>+].*?)>/;
const clearHeightWidth = /(width|height)="([^>+].*?)"/g;
const hasViewBox = /(viewBox="[^>+].*?")/g;
const clearReturn = /(\r)|(\n)/g;

function svgFind(e: string): any[] {
  const arr: string[] = [];
  const dirents = readdirSync(e, { withFileTypes: true });
  dirents.forEach((dirent) => {
    if (dirent.isDirectory()) arr.push(...svgFind(`${e + dirent.name}/`));
    else {
      const svg = readFileSync(e + dirent.name)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, ($1: any, $2: any) => {
          let width = 0;
          let height = 0;
          let content = $2.replace(clearHeightWidth, (s1: any, s2: any, s3: any) => {
            if (s2 === 'width') width = s3;
            else if (s2 === 'height') height = s3;
            return '';
          });
          if (!hasViewBox.test($2)) content += `viewBox="0 0 ${width} ${height}"`;
          return `<symbol id="${dirent.name.replace('.svg', '')}" ${content}>`;
        })
        .replace('</svg>', '</symbol>');
      arr.push(svg);
    }
  });
  return arr;
}

export default function createSvg(path: string) {
  if (path === '') return null;
  const res = svgFind(path);
  return {
    name: 'svg-transform',
    transformIndexHtml(dom: String) {
      return dom.replace(
        '<body>',
        `<body><svg style="position: absolute; width: 0; height: 0">${res.join('')}</svg>`,
      );
    },
  };
}
