import { handler as chrome } from "./chrome";
import { handler as firefox } from "./firefox";

type Handler = (
  browserVersion: string,
  arch: string
) => [string, string, string];

const handlers: { [index: string]: Handler } = {
  chrome,
  firefox
};

export default handlers;
