import type { NextApiRequest, NextApiResponse } from "next";
import handler from "../../vimeo/[...path]";

export default function devVimeoProxy(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return handler(req, res);
}
