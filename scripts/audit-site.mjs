import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const affiliate = "https://radarkobiet.pl/link/3019/19099102";
const files = [];
function walk(dir){for(const name of fs.readdirSync(dir)){if([".git","screenshots"].includes(name))continue;const p=path.join(dir,name);const s=fs.statSync(p);if(s.isDirectory())walk(p);else if(name.endsWith(".html"))files.push(p);}}
walk(root);
const pages = files.map((file)=>({file,html:fs.readFileSync(file,"utf8"),url:"/"+path.relative(root,path.dirname(file)).replaceAll(path.sep,"/").replace(/^\.$/,"") .replace(/^$/,"")}));
const errors = [];
const seenTitle = new Map();
const seenDesc = new Map();
const existing = new Set(["/","/404.html","/sitemap.xml","/robots.txt","/manifest.webmanifest","/assets/style.css","/assets/site.js","/assets/favicon.svg","/assets/hero-dating-safety.png"]);
for(const p of pages){const rel=path.relative(root,path.dirname(p.file));existing.add(rel==="."?"/":`/${rel}/`);}
for(const page of pages){
  const h = page.html;
  const title = (h.match(/<title>(.*?)<\/title>/i)||[])[1];
  const desc = (h.match(/<meta name="description" content="([^"]+)"/i)||[])[1];
  const h1s = [...h.matchAll(/<h1[\s>]/gi)].length;
  if(h1s!==1) errors.push(`${page.file}: expected one H1, got ${h1s}`);
  if(!title) errors.push(`${page.file}: missing title`);
  if(!desc) errors.push(`${page.file}: missing description`);
  if(title){if(seenTitle.has(title)) errors.push(`${page.file}: duplicate title with ${seenTitle.get(title)}`); seenTitle.set(title,page.file);}
  if(desc){if(seenDesc.has(desc)) errors.push(`${page.file}: duplicate description with ${seenDesc.get(desc)}`); seenDesc.set(desc,page.file);}
  if(!/<meta name="viewport"/i.test(h)) errors.push(`${page.file}: missing viewport`);
  if(!/<html lang="pl"/i.test(h)) errors.push(`${page.file}: missing lang=pl`);
  if(!/<link rel="canonical" href="https:\/\/gaypolska\.pl\/.*?"/i.test(h)) errors.push(`${page.file}: bad canonical`);
  for(const block of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){try{JSON.parse(block[1]);}catch(e){errors.push(`${page.file}: invalid JSON-LD ${e.message}`);}}
  for(const a of h.matchAll(/<a\b([^>]+)>/gi)){
    const attrs = a[1];
    const href = (attrs.match(/href="([^"]*)"/)||[])[1];
    const hrefPath = href?.split("?")[0];
    if(!href) errors.push(`${page.file}: anchor without href`);
    if(href==="#") errors.push(`${page.file}: empty # href`);
    if(/target="_blank"/.test(attrs) && !/rel="[^"]*noopener[^"]*noreferrer/.test(attrs)) errors.push(`${page.file}: target blank without noopener noreferrer`);
    if(href?.startsWith(affiliate)){
      if(!/rel="[^"]*nofollow[^"]*sponsored/.test(attrs)) errors.push(`${page.file}: affiliate missing nofollow sponsored`);
      if(!/data-position=/.test(attrs)) errors.push(`${page.file}: affiliate missing data-position`);
    }
    if(hrefPath?.startsWith("/") && !hrefPath.startsWith("/assets/") && !existing.has(hrefPath)) errors.push(`${page.file}: broken internal link ${href}`);
  }
  for(const img of h.matchAll(/<img\b([^>]+)>/gi)){
    const attrs=img[1], src=(attrs.match(/src="([^"]+)"/)||[])[1];
    if(!/alt=/.test(attrs)) errors.push(`${page.file}: image missing alt`);
    if(!/width=/.test(attrs)||!/height=/.test(attrs)) errors.push(`${page.file}: image missing dimensions`);
    const srcPath = src?.split("?")[0];
    if(srcPath?.startsWith("/") && !existing.has(srcPath)) errors.push(`${page.file}: missing image ${src}`);
  }
}
const sitemap = fs.readFileSync(path.join(root,"sitemap.xml"),"utf8");
for(const page of pages.filter(p=>!p.file.endsWith("404.html"))){
  const rel=path.relative(root,path.dirname(page.file));
  const loc=rel===""||rel==="." ? "https://gaypolska.pl/" : `https://gaypolska.pl/${rel}/`;
  if(!sitemap.includes(`<loc>${loc}</loc>`)) errors.push(`${page.file}: not in sitemap`);
}
if(!fs.readFileSync(path.join(root,"robots.txt"),"utf8").includes("Sitemap: https://gaypolska.pl/sitemap.xml")) errors.push("robots.txt: missing sitemap");
console.log(JSON.stringify({pages:pages.length,indexable:pages.length-1,errors},null,2));
if(errors.length) process.exit(1);
