//const markdown = require('./markdown.md?init');
import json from './markdown.md?raw'; // makes it hot reloadable
function log(...args: any[]) {
  args.forEach((arg: any) => {
    document.body.appendChild(new Text(arg));
  });
}

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    if (newModule) {
      // newModule is undefined when SyntaxError happened

      run();
      console.log('updated: count is now ', newModule.count);
    }
  });
}

async function run() {
  const url = new URL('./markdown.md', import.meta.url).href;

  // const content = await (await fetch(url)).text();
  log(`reload: ${Date.now()} - ${url} ${json}`);
}
