import webdriverDownloader from "../../webdriverDownloader";
import {
  mapVersionToDriver,
  supportedBrowserVersions,
  minSupportedBrowserVersion,
  maxSupportedBrowserVersion,
  supportedArch
} from "./versionMapper";

export default (browserVersion: string, arch: string): Promise<string> => {
  validateBrowserVersion(browserVersion);
  validateArch(arch);

  const webdriverVersion = mapVersionToDriver(browserVersion);
  const url = getWebdriverUrl(webdriverVersion, arch);
  const filename = getDownloadFilename(arch, webdriverVersion);
  const result = webdriverDownloader(url, filename);
  return result;
};

function getDownloadFilename(arch: string, webdriverVersion: string) {
  return `chromedriver_${arch}_${webdriverVersion}.zip`;
}

function getWebdriverUrl(webdriverVersion: string, arch: string) {
  return `https://chromedriver.storage.googleapis.com/${webdriverVersion}/chromedriver_${arch}.zip`;
}

function validateArch(arch: string) {
  if (!supportedArch.includes(arch)) {
    const message = `Invalid chrome arch: ${arch} -- supported: ${supportedArch.join(
      ", "
    )}`;
    throw new Error(message);
  }
}

function validateBrowserVersion(browserVersion: string) {
  if (!supportedBrowserVersions.includes(browserVersion)) {
    const message = `Invalid chrome browser version: ${browserVersion} -- min: ${minSupportedBrowserVersion}, max: ${maxSupportedBrowserVersion}`;
    throw new Error(message);
  }
}
