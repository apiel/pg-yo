import { main, Runner } from './consumer.ts';

export function run(file: string) {
    console.log('open file', file);
    console.log('parse file');
    console.log('extract price');
    console.log('send to next step: save');
    console.log('extract urls');
    console.log('send next step: urls');
    console.log('remove file');
}

if (import.meta.main) {
    main(Runner.parse, run);
}
