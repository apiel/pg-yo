import { Consumer, main } from "./consumer.ts";

class consumer extends Consumer {
  constructor() {
    super("crawl");
  }

  run(file: string) {
    console.log("open file", file);
    console.log("call url");
    console.log("save html file");
    console.log("go next step: parse");
    console.log("remove file");
  }
}

if (import.meta.main) {
  main(new consumer());
}
