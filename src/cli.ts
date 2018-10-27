import { mapVersionToDriver } from "./chromedriverVersionMapper";

const main = (pkg: any, ...args: string[]) => {
  const [browser, version] = args;
  console.log(`wdvm ${pkg.version}`);
  console.log(`Using ${browser} v${version}`);
  console.log(
    `Webdriver version required: ${mapVersionToDriver(parseInt(version, 10))}`
  );
};

main(require("../package.json"), ...process.argv.slice(2));
