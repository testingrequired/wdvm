import chromeHandler from "./handlers/chrome";

type Handler = (browserVersion: string, arch: string) => Promise<string>;

const handlers: { [index: string]: Handler } = {
  chrome: chromeHandler
};

const main = (pkg: any, args: string[]) => {
  const [browser, version, arch] = args;

  console.log(`wdvm ${pkg.version}`);
  console.log(`Using ${browser} v${version}`);

  const handler = handlers[browser];

  handler(version, arch).then(result => console.log(result));
};

main(require("../package.json"), process.argv.slice(2));
