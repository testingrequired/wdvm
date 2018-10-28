#!/usr/bin/env node

import handlers from "./handlers";
import webdriverDownloader from "./webdriverDownloader";
import webdriverInstaller from "./webdriverInstaller";
import loadConfig from "./loadConfig";

const main = (pkg: any, args: string[]) => {
  const [browser, version, platform] = args;

  console.log(`wdvm ${pkg.version}`);

  validateBrowser(browser);
  validateVersion(version);

  console.log(`Using ${browser} v${version} on ${platform}`);

  const config = loadConfig();

  const [webdriverVersion, url, filename] = handlers[browser](
    version,
    platform
  );

  console.log(`Requires ${browser} webdriver version: ${webdriverVersion}`);
  console.log(`Downloading ${url}...`);

  webdriverDownloader(url, filename)
    .then(logDownloadPath)
    .then(webdriverInstaller(config.dest))
    .catch(e => console.log(`Error: ${e}`));
};

main(require("../package.json"), process.argv.slice(2));

function logDownloadPath(downloadPath: string) {
  console.log(`Downloaded to: ${downloadPath}`);
  return downloadPath;
}

function validateBrowser(browser: string) {
  if (typeof browser === "undefined") {
    throw new Error("Browser must be defined");
  }

  if (!Object.keys(handlers).includes(browser)) {
    throw new Error(`Unsupported browser: ${browser}`);
  }
}

function validateVersion(version: string) {
  if (typeof version === "undefined") {
    throw new Error("Browser version must be defined");
  }
}
