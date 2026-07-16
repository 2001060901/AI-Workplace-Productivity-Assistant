import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const completion = await client.chat.completions.create({
      model: "tencent/hunyuan-hy3:free",

      messages: [
        {
          role: "system",
          content:
            "You are an AI workplace productivity assistant that writes professional emails.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      max_tokens: 300,
    });

    return Response.json({
      text: completion.choices[0].message.content,
    });
  } catch (error: any) {
    console.error("OpenRouter:", error);

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}