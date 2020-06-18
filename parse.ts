import { push, Runner, Item } from "./consumer";
import { JSDOM } from "jsdom";
import { namifyUrl } from "./utils/slugify";
import { fixUrl } from "./utils/fixurl";

export function runParser({ data }: Item) {
  console.log("parse", data.url);

  const dom = new JSDOM(data.html);
  const links = dom.window.document.links;
  for (var i = 0; i < links.length; i++) {
    const url = fixUrl(links[i].href);
    // actually this should be the job of handleURL but for testing i hack :p
    if (url.startsWith("http") && !url.startsWith("https://www.fressnapf.at/c/")) {
    //   console.log("url:", url);
      push(Runner.urls, {
        url,
        name: namifyUrl(url),
      });
    }
  }
}

// const html = readFileSync("./file.html").toString();
// runParser({ data: { html } });
