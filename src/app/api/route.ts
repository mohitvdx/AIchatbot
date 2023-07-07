import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request, res: NextResponse) {
    const body = await req.json()
  
    const completion = await openai.createChatCompletion({
      model:"text-davinci-003",
      messages: body.messages,
    });
    console.log(completion.data.choices[0].message);
    const theResponse = completion.data.choices[0].message;
  
    return NextResponse.json({ output: theResponse }, { status: 200 })
  
  };