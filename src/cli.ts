import handlers from "./handlers";
import webdriverDownloader from "./webdriverDownloader";
import webdriverInstaller from "./webdriverInstaller";

const main = (pkg: any, args: string[]) => {
  const [browser, version, arch] = args;

  console.log(`wdvm ${pkg.version}`);
  console.log(`Using ${browser} v${version} on ${arch}`);

  validateBrowser(browser);

  const [webdriverVersion, url, filename] = handlers[browser](version, arch);

  console.log(`Requires ${browser} webdriver version: ${webdriverVersion}`);
  console.log(`Downloading ${filename}...`);

  webdriverDownloader(url, filename)
    .then(logDownloadPath)
    .then(webdriverInstaller)
    .catch(e => console.log(`Error: ${e}`));
};

main(require("../package.json"), process.argv.slice(2));

function logDownloadPath(downloadPath: string) {
  console.log(`Downloaded to: ${downloadPath}`);
  return downloadPath;
}

function validateBrowser(browser: string) {
  if (!Object.keys(handlers).includes(browser)) {
    throw new Error(`Unsupported browser: ${browser}`);
  }
}
