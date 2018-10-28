import {
  mapVersionToDriver,
  supportedBrowserVersions,
  minSupportedBrowserVersion,
  maxSupportedBrowserVersion,
  supportedArch
} from "./versionMapper";

export const handler = (
  browserVersion: string,
  arch: string
): [string, string, string] => {
  validateBrowserVersion(browserVersion);
  validateArch(arch);

  const webdriverVersion = mapVersionToDriver(browserVersion);
  const url = getWebdriverUrl(webdriverVersion, arch);
  const filename = getDownloadFilename(arch, webdriverVersion);
  return [webdriverVersion, url, filename];
};

function getExtension(arch: string) {
  return arch.startsWith("win") ? ".zip" : ".tar.gz";
}

function getDownloadFilename(arch: string, webdriverVersion: string) {
  const ext = getExtension(arch);
  return `geckodriver-v${webdriverVersion}-${arch}${ext}`;
}

function getWebdriverUrl(webdriverVersion: string, arch: string) {
  const ext = getExtension(arch);
  return `https://github.com/mozilla/geckodriver/releases/download/v${webdriverVersion}/geckodriver-v${webdriverVersion}-${arch}${ext}`;
}

function validateArch(arch: string) {
  if (!supportedArch.includes(arch)) {
    const message = `Invalid firefox arch: ${arch} -- supported: ${supportedArch.join(
      ", "
    )}`;
    throw new Error(message);
  }
}

function validateBrowserVersion(browserVersion: string) {
  if (!supportedBrowserVersions.includes(browserVersion)) {
    const message = `Invalid firefox browser version: ${browserVersion} -- min: ${minSupportedBrowserVersion}, max: ${maxSupportedBrowserVersion}`;
    throw new Error(message);
  }
}
