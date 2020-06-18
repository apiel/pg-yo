import { push, Runner, Item } from "./consumer";
import axios from "axios";
// import { writeFileSync } from "fs";

export async function runCrawler({ data }: Item) {
  console.log("fetch", data.url);
  const { data: html } = await axios.get(data.url);
  push(Runner.parse, {
    ...data,
    html,
  });
  //   writeFileSync('file.html', html);
}
