import ChatCompletion from 'openai';
import OpenAI from 'openai';

export const sendMessage = async (messages: OpenAI.Chat.ChatCompletionMessageParam[]): Promise<any> => {
  try {
    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}