import os from "os";
import path from "path";
import fs from "fs";

export interface Config {
  dest?: string;
}

export default (): Config => {
  const configPath = path.resolve(os.homedir(), ".wdvmrc.json");
  console.log(`Loading config: ${configPath}...`);
  if (fs.existsSync(configPath)) return require(configPath);
  return {};
};
