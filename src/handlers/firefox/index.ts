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

function getExtension(platform: string) {
  return platform.startsWith("win") ? ".zip" : ".tar.gz";
}

function getDownloadFilename(platform: string, webdriverVersion: string) {
  const ext = getExtension(platform);
  return `geckodriver-v${webdriverVersion}-${platform}${ext}`;
}

function getWebdriverUrl(webdriverVersion: string, platform: string) {
  const ext = getExtension(platform);
  return `https://github.com/mozilla/geckodriver/releases/download/v${webdriverVersion}/geckodriver-v${webdriverVersion}-${platform}${ext}`;
}

function validatePlatform(platform: string) {
  if (!supportedPlatforms.includes(platform)) {
    const message = `Invalid firefox platform: ${platform} -- supported: ${supportedPlatforms.join(
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
