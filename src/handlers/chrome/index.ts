import {
  mapVersionToDriver,
  supportedBrowserVersions,
  minSupportedBrowserVersion,
  maxSupportedBrowserVersion,
  supportedPlatforms
} from "./versionMapper";

export const handler = (
  browserVersion: string,
  platform: string
): [string, string, string] => {
  validateBrowserVersion(browserVersion);
  validatePlatform(platform);

  const webdriverVersion = mapVersionToDriver(browserVersion);
  const url = getWebdriverUrl(webdriverVersion, platform);
  const filename = getDownloadFilename(platform, webdriverVersion);
  return [webdriverVersion, url, filename];
};

function getDownloadFilename(platform: string, webdriverVersion: string) {
  return `chromedriver_${platform}_${webdriverVersion}.zip`;
}

function getWebdriverUrl(webdriverVersion: string, paltform: string) {
  return `https://chromedriver.storage.googleapis.com/${webdriverVersion}/chromedriver_${paltform}.zip`;
}

function validatePlatform(platform: string) {
  if (!supportedPlatforms.includes(platform)) {
    const message = `Invalid chrome platform: ${platform} -- supported: ${supportedPlatforms.join(
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
