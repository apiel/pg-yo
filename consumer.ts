export enum Runner {
  crawl = "crawl",
  parse = "parse",
  save = "save",
  urls = "url",
}

export function consume(type: string) {
    let { run } = require(`./${type}.ts`);
    let files = fs.readdirSync(`/data/${type}/`);
    files.forEach(run);
}
