export abstract class Consumer {
  constructor(private type: string) {}

  consume() {
    let files = fs.readdirSync(`/data/${this.type}/`);
    files.forEach(this.run);
  }

  main(options: any) {
    if (options.file) {
      this.run(options.file);
    } else {
      this.consume();
    }
  }

  abstract run(file: string): void;
}

export function main(consumer: Consumer) {
  const [file] = process.args();
  const options = {
    file,
  };
  consumer.main(options);
}
