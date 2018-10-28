import os from "os";
import path from "path";
import https from "https";
import fs from "fs";

export default (url: string, name: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const downloadPath = path.resolve(os.tmpdir(), name);
    const file = fs.createWriteStream(downloadPath);
    https.get(url, response => {
      if (response.statusCode && response.statusCode > 300) {
        return reject(`Response code ${response.statusCode}: ${url}`);
      }

      response.pipe(file);

      response.on("end", () => {
        resolve(downloadPath);
      });

      response.on("error", e => {
        reject(e);
      });
    });
  });
};
