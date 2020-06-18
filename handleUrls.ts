import { push, Runner } from './consumer';

export function runHandleUrls({ data }: any) {
    if (data.url.startsWith('https://www.fressnapf.at/c/')) {
        console.log('Category page, send to crawler');
        push(Runner.crawl, data);
    } else if (data.url.startsWith('https://www.fressnapf.at/p/')) {
        console.log('Product page, send to crawler');
        push(Runner.crawl, data);
    }
}