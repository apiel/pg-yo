// let use async instead of sync but for prototype i use sync
import { writeFileSync, readdirSync, readFileSync, unlinkSync } from "fs";
import { join } from "path";

export interface Data {
  name: string,
  url: string,
  html?: string,
}

export interface Item {
  file: string,
  data: Data,
}

export enum Runner {
  crawl = "crawl",
  parse = "parse",
  save = "save",
  urls = "urls",
}

export function push(type: Runner, data: Data) {
  writeFileSync(join(__dirname, "data", type, data.name), JSON.stringify(data));
}

function pick(type: Runner) {
  const folder = join(__dirname, "data", type);
  const [filename] = readdirSync(folder);
  if (filename) {
    const file = join(folder, filename);
    return {
      file,
      data: JSON.parse(readFileSync(file).toString()),
    };
  }
}

export async function consume(type: Runner, run: (item: Item) => void | Promise<void>) {
  const item = pick(type);
  if (item) {
    await run(item);
    unlinkSync(item.file);
    consume(type, run);
  } else {
    setTimeout(() => consume(type, run), 1000);
  }
}
