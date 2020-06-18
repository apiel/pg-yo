import { push, Runner } from './consumer';
import axios from 'axios';

export async function runCrawler({ data }: any) {
    const { data: html } = await axios.get(data.url);
    push(Runner.parse, {
        ...data,
        html,
    })
}