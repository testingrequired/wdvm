import { mapVersionToDriver } from "./chromedriverVersionMapper";
import webdriverDownloader from "./webdriverDownloader";

const main = (pkg: any, args: string[]) => {
  const [browser, version] = args;

  const webdriverVersion = parseFloat(
    mapVersionToDriver(parseInt(version, 10))
  );

  console.log(`wdvm ${pkg.version}`);
  console.log(`Using ${browser} v${version}`);
  console.log(`Webdriver version required: ${webdriverVersion}`);

  const url = `https://chromedriver.storage.googleapis.com/${webdriverVersion}/chromedriver_win32.zip`;

  webdriverDownloader(url, `chromedriver_win32.${webdriverVersion}.zip`)
    .then(console.log)
    .catch(console.log);
};

main(require("../package.json"), process.argv.slice(2));
