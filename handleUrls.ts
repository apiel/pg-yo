import { push, Runner, Item } from "./consumer";

export function runHandleUrls({ data }: Item) {
  if (data.url.startsWith("https://www.fressnapf.at/c/")) {
    console.log("Category page, send to crawler", data.url);
    push(Runner.crawl, data);
  } else if (data.url.startsWith("https://www.fressnapf.at/p/")) {
    console.log("Product page, send to crawler", data.url);
    push(Runner.crawl, data);
  }
}
