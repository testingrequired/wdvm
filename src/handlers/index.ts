import { handler as chrome } from "./chrome";

type Handler = (
  browserVersion: string,
  arch: string
) => [string, string, string];

const handlers: { [index: string]: Handler } = {
  chrome
};

export default handlers;
