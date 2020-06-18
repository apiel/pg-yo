import { push, consume, Runner } from "./consumer";
import { namifyUrl } from "./utils/slugify";
import { runHandleUrls } from "./handleUrls";
import { runCrawler } from "./crawl";
import { runParser } from "./parse";

const url = process.argv[2];

push(Runner.urls, { name: namifyUrl(url), url });

consume(Runner.urls, runHandleUrls);
consume(Runner.crawl, runCrawler);
consume(Runner.parse, runParser);
