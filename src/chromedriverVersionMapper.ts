export const map = new Map<string, Array<number>>();

map.set("2.43", [69, 71]);
map.set("2.42", [68, 70]);
map.set("2.41", [67, 69]);
map.set("2.40", [66, 68]);
map.set("2.39", [66, 68]);
map.set("2.38", [65, 67]);
map.set("2.37", [64, 66]);
map.set("2.36", [63, 65]);
map.set("2.35", [62, 64]);
map.set("2.34", [61, 63]);
map.set("2.33", [60, 62]);

export const mapVersionToDriver = (browserVersion: number) =>
  Array.from(map.entries()).reduce((acc: any, item: any): string => {
    const [driverVersion, browserVersions] = item;
    const [min, max] = browserVersions;
    const driverVersionFloat = parseFloat(driverVersion);
    const lastVersionFloat = parseFloat(acc);

    if (
      browserVersion >= min &&
      browserVersion <= max &&
      driverVersionFloat > lastVersionFloat
    ) {
      return driverVersion;
    }

    return acc;
  }, "0");
