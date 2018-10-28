import {
  versionMap,
  mapVersionToDriver,
  minSupportedBrowserVersion,
  maxSupportedBrowserVersion,
  supportedBrowserVersions
} from "./versionMapper";

describe("minSupportedBrowserVersion", () => {
  it("should be 60", () => {
    expect(minSupportedBrowserVersion).toBe("52");
  });
});

describe("maxSupportedBrowserVersion", () => {
  it("should be 71", () => {
    expect(maxSupportedBrowserVersion).toBe("62");
  });
});

describe("supportedBrowserVersions", () => {
  it("should include range from min to max", () => {
    expect(supportedBrowserVersions).toEqual(["52", "53", "55", "57", "62"]);
  });
});

describe("mapVersionToDriver", () => {
  it("should map 71", () => {
    expect(mapVersionToDriver("62")).toEqual("0.23.0");
  });

  it("should map 71", () => {
    expect(mapVersionToDriver("57")).toEqual("0.23.0");
  });

  it("should map 71", () => {
    expect(mapVersionToDriver("55")).toEqual("0.20.1");
  });

  it("should map 68", () => {
    expect(mapVersionToDriver("53")).toEqual("0.18.0");
  });

  it("should map 67", () => {
    expect(mapVersionToDriver("52")).toEqual("0.17.0");
  });
});

describe("map", () => {
  describe("0.23.0", () => {
    it("should have correct range", () => {
      expect(versionMap.get("0.23.0")).toEqual([57, 62]);
    });
  });

  describe("0.22.0", () => {
    it("should have correct range", () => {
      expect(versionMap.get("0.22.0")).toEqual([57, 62]);
    });
  });

  describe("0.21.0", () => {
    it("should have correct range", () => {
      expect(versionMap.get("0.21.0")).toEqual([57, 62]);
    });
  });

  describe("0.20.1", () => {
    it("should have correct range", () => {
      expect(versionMap.get("0.20.1")).toEqual([55, 62]);
    });
  });

  describe("0.20.0", () => {
    it("should have correct range", () => {
      expect(versionMap.get("0.20.0")).toEqual([55, 62]);
    });
  });

  describe("0.19.1", () => {
    it("should have correct range", () => {
      expect(versionMap.get("0.19.1")).toEqual([55, 62]);
    });
  });

  describe("0.19.0", () => {
    it("should have correct range", () => {
      expect(versionMap.get("0.19.0")).toEqual([55, 62]);
    });
  });

  describe("0.18.0", () => {
    it("should have correct range", () => {
      expect(versionMap.get("0.18.0")).toEqual([53, 62]);
    });
  });

  describe("0.17.0", () => {
    it("should have correct range", () => {
      expect(versionMap.get("0.17.0")).toEqual([52, 62]);
    });
  });
});
