export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    return Response.json({
      text: `Subject: Professional Email

Dear Sir/Madam,

Thank you for your message.

${prompt}

I appreciate your time and consideration. Please let me know if you require any additional information.

Kind regards,
Your Name`,
    });
  } catch {
    return Response.json(
      { error: "Unable to generate email." },
      { status: 500 }
    );
  }
}