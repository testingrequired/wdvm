import os from "os";
import path from "path";

import chromeHandler from "./handlers/chrome";
import webdriverDownloader from "./webdriverDownloader";
import webdriverInstaller from "./webdriverInstaller";

type Handler = (
  browserVersion: string,
  arch: string
) => [string, string, string];

interface Config {
  root: string;
}

const handlers: { [index: string]: Handler } = {
  chrome: chromeHandler
};

const main = (pkg: any, args: string[]) => {
  const [browser, version, arch] = args;
  const config = loadConfig();

  console.log(`wdvm ${pkg.version}`);
  console.log(`Using ${browser} v${version} on ${arch}`);

  validateBrowser(browser);

  const handler = handlers[browser];
  const [webdriverVersion, url, filename] = handler(version, arch);

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

function loadConfig(): Config {
  return require(path.resolve(os.homedir(), ".wdvmrc"));
}
