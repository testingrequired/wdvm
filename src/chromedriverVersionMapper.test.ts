import { map, mapVersionToDriver } from "./chromedriverVersionMapper";

describe("mapVersionToDriver", () => {
  it("should map 71", () => {
    expect(mapVersionToDriver(71)).toEqual("2.43");
  });

  it("should map 71", () => {
    expect(mapVersionToDriver(70)).toEqual("2.43");
  });

  it("should map 71", () => {
    expect(mapVersionToDriver(69)).toEqual("2.43");
  });

  it("should map 68", () => {
    expect(mapVersionToDriver(68)).toEqual("2.42");
  });

  it("should map 67", () => {
    expect(mapVersionToDriver(67)).toEqual("2.41");
  });

  it("should map 66", () => {
    expect(mapVersionToDriver(66)).toEqual("2.40");
  });

  it("should map 65", () => {
    expect(mapVersionToDriver(65)).toEqual("2.38");
  });

  it("should map 64", () => {
    expect(mapVersionToDriver(64)).toEqual("2.37");
  });

  it("should map 63", () => {
    expect(mapVersionToDriver(63)).toEqual("2.36");
  });

  it("should map 62", () => {
    expect(mapVersionToDriver(62)).toEqual("2.35");
  });

  it("should map 61", () => {
    expect(mapVersionToDriver(61)).toEqual("2.34");
  });

  it("should map 60", () => {
    expect(mapVersionToDriver(60)).toEqual("2.33");
  });
});

describe("map", () => {
  describe("2.43", () => {
    it("should have correct range", () => {
      expect(map.get("2.43")).toEqual([69, 71]);
    });
  });

  describe("2.42", () => {
    it("should have correct range", () => {
      expect(map.get("2.42")).toEqual([68, 70]);
    });
  });

  describe("2.41", () => {
    it("should have correct range", () => {
      expect(map.get("2.41")).toEqual([67, 69]);
    });
  });

  describe("2.40", () => {
    it("should have correct range", () => {
      expect(map.get("2.40")).toEqual([66, 68]);
    });
  });

  describe("2.39", () => {
    it("should have correct range", () => {
      expect(map.get("2.39")).toEqual([66, 68]);
    });
  });

  describe("2.38", () => {
    it("should have correct range", () => {
      expect(map.get("2.38")).toEqual([65, 67]);
    });
  });

  describe("2.37", () => {
    it("should have correct range", () => {
      expect(map.get("2.37")).toEqual([64, 66]);
    });
  });

  describe("2.36", () => {
    it("should have correct range", () => {
      expect(map.get("2.36")).toEqual([63, 65]);
    });
  });

  describe("2.35", () => {
    it("should have correct range", () => {
      expect(map.get("2.35")).toEqual([62, 64]);
    });
  });

  describe("2.34", () => {
    it("should have correct range", () => {
      expect(map.get("2.34")).toEqual([61, 63]);
    });
  });

  describe("2.33", () => {
    it("should have correct range", () => {
      expect(map.get("2.33")).toEqual([60, 62]);
    });
  });
});
