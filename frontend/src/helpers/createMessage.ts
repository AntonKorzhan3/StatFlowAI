import { NextApiRequest, NextApiResponse } from "next";
import ChatCompletion from "openai";
import OpenAI from "openai";

// export default async function createMessage(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { messages } = req.body;
//   const apiKey = process.env.OPENAI_API_KEY;
//   const url = "https://api.openai.com/v1/chat/completions";

//   const body = JSON.stringify({
//     messages,
//     model: "gpt-3.5-turbo",
//     stream: false,
//   });

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body,
//     });
//     const data = await response.json();
//     res.status(200).json({ data });
//   } catch (error: any) {
//     res.status(500).json({ error: error.message as string });
//   }
// }

export const createMessage = async (
  messages: OpenAI.Chat.ChatCompletionMessageParam[]
) => {
  const apiKey = process.env.openAi;
  const url = "https://api.openai.com/v1/chat/completions";

  const body = JSON.stringify({
    messages,
    model: "gpt-4-turbo",
    stream: false,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error: any) {
    // Throw error instead
  }
};
