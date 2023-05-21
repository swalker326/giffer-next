import { type NextApiRequest, type NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return Promise.resolve(
      res.status(200).json({
        data: {
          message: "Hello world",
        },
      })
    );
  } else {
    return Promise.resolve(
      res.status(405).json({
        error: {
          message: "Method not allowed",
        },
      })
    );
  }
}
