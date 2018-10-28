import range from "../../utils/range";

export const versionMap = new Map<string, Array<number>>();

versionMap.set("0.23.0", [57, 62]);
versionMap.set("0.22.0", [57, 62]);
versionMap.set("0.21.0", [57, 62]);
versionMap.set("0.20.1", [55, 62]);
versionMap.set("0.20.0", [55, 62]);
versionMap.set("0.19.1", [55, 62]);
versionMap.set("0.19.0", [55, 62]);
versionMap.set("0.18.0", [53, 62]);
versionMap.set("0.17.0", [52, 62]);

export const supportedBrowserVersions = Array.from(versionMap.values())
  .reduce((acc: number[], item: number[]): number[] => {
    const [min, max] = item;
    const set = new Set(acc);
    range(min, max).forEach(i => set.add(i));
    return Array.from(set);
  }, [])
  .sort()
  .map(value => value.toString());

export const minSupportedBrowserVersion = supportedBrowserVersions[0];
export const maxSupportedBrowserVersion =
  supportedBrowserVersions[supportedBrowserVersions.length - 1];

export const supportedPlatforms = [
  "win32",
  "win64",
  "macos",
  "linux64",
  "linux32",
  "arm7hf"
];

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
