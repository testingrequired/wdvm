import webdriverDownloader from "../../webdriverDownloader";
import {
  mapVersionToDriver,
  supportedBrowserVersions,
  minSupportedBrowserVersion,
  maxSupportedBrowserVersion,
  supportedArch
} from "./chromedriverVersionMapper";

export default (browserVersion: string, arch: string): Promise<string> => {
  if (!supportedBrowserVersions.includes(browserVersion)) {
    const message = `Invalid chrome browser version: ${browserVersion} -- min: ${minSupportedBrowserVersion}, max: ${maxSupportedBrowserVersion}`;
    throw new Error(message);
  }

  if (!supportedArch.includes(arch)) {
    const message = `Invalid chrome arch: ${arch} -- supported: ${supportedArch.join(
      ", "
    )}`;
    throw new Error(message);
  }

  const webdriverVersion = mapVersionToDriver(browserVersion);
  const url = `https://chromedriver.storage.googleapis.com/${webdriverVersion}/chromedriver_${arch}.zip`;
  const filename = `chromedriver_${arch}_${webdriverVersion}.zip`;
  const result = webdriverDownloader(url, filename);
  return result;
};
