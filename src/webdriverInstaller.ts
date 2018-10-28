import os from "os";
import fs from "fs";
import path from "path";
import unzip from "unzip";

export default (downloadPath: string) => {
  const dest = path.resolve(os.homedir(), ".wdvm");

  console.log(`Installing to ${dest}...`);

  fs.createReadStream(downloadPath)
    .pipe(unzip.Parse())
    .on("entry", entry => {
      const installedPath = `${dest}/${entry.path}`;
      console.log(`Copying ${entry.path} to ${installedPath}`);
      entry.pipe(fs.createWriteStream(installedPath));
    });
};
