export function namifyUrl(url: string) {
  return `${+new Date()}_${url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .replace(/[\/\?\%\=]/g, "-")}.json`;
}
