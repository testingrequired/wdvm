import chromeHandler from "./handlers/chrome";

const main = (pkg: any, args: string[]) => {
  const [browser, version, arch] = args;

  console.log(`wdvm ${pkg.version}`);
  console.log(`Using ${browser} v${version}`);

  chromeHandler(version, arch).then(result => console.log(result));
};

main(require("../package.json"), process.argv.slice(2));
