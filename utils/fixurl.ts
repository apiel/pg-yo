export function fixUrl(url: string) {
  const base = "https://www.fressnapf.at";
//   return url.replace(/^\/c\//g, base).replace(/^\/p\//g, base);
  return url.replace(/^\/p\//g, `${base}/p/`);
}
