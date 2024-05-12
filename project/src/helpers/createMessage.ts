import OpenAI from "openai";

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
