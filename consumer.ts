export enum Runner {
  crawl = "crawl",
  parse = "parse",
  save = "save",
  urls = "url",
}

export function consume(type: string, run: (file: string) => void) {
    let files = fs.readdirSync(`/data/${type}/`);
    files.forEach(run);
}

export function main(type: string, run: (file: string) => void) {
  const [file] = process.args();
  if (file) {
    run(file);
  } else {
    consume(type, run);
  }
}
