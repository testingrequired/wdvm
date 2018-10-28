import os from "os";
import fs from "fs";
import path from "path";
import unzip from "unzip";
let targz = require("targz");

export default (dest: string = path.resolve(os.homedir(), ".wdvm")) => (
  downloadPath: string
) => {
  console.log(`Installing to ${dest}...`);

  if (downloadPath.endsWith(".zip")) {
    fs.createReadStream(downloadPath)
      .pipe(unzip.Parse())
      .on("entry", entry => {
        const installedPath = `${dest}/${entry.path}`;
        console.log(`Copying ${entry.path} to ${installedPath}`);
        entry.pipe(fs.createWriteStream(installedPath));
      });
  }

  if (downloadPath.endsWith(".tar.gz")) {
    targz.decompress(
      {
        src: downloadPath,
        dest
      },
      (err: any) => {
        if (err) throw new Error(err);
      }
    );
  }
};
