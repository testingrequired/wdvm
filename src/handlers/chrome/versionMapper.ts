export const versionMap = new Map<string, Array<number>>();

versionMap.set("2.43", [69, 71]);
versionMap.set("2.42", [68, 70]);
versionMap.set("2.41", [67, 69]);
versionMap.set("2.40", [66, 68]);
versionMap.set("2.39", [66, 68]);
versionMap.set("2.38", [65, 67]);
versionMap.set("2.37", [64, 66]);
versionMap.set("2.36", [63, 65]);
versionMap.set("2.35", [62, 64]);
versionMap.set("2.34", [61, 63]);
versionMap.set("2.33", [60, 62]);

export const supportedBrowserVersions = Array.from(versionMap.values())
  .reduce((acc: number[], item: number[]): number[] => {
    const [min, max] = item;
    const updates = [];
    if (!acc.includes(min)) updates.push(min);
    if (!acc.includes(max)) updates.push(max);
    return [...acc, ...updates];
  }, [])
  .sort()
  .map(value => value.toString());

export const minSupportedBrowserVersion = supportedBrowserVersions[0];
export const maxSupportedBrowserVersion =
  supportedBrowserVersions[supportedBrowserVersions.length - 1];

export const supportedArch = ["win32", "mac64", "linux64"];

export const mapVersionToDriver = (browserVersionString: string) =>
  Array.from(versionMap.entries()).reduce((acc: any, item: any): string => {
    const [driverVersion, browserVersions] = item;
    const [min, max] = browserVersions;
    const driverVersionFloat = parseFloat(driverVersion);
    const lastVersionFloat = parseFloat(acc);
    const browserVersion = parseInt(browserVersionString, 10);

    if (
      browserVersion >= min &&
      browserVersion <= max &&
      driverVersionFloat > lastVersionFloat
    ) {
      return driverVersion;
    }

    return acc;
  }, "0");
