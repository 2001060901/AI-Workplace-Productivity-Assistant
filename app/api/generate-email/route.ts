export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const email = `
Subject: ${prompt.split("\n")[2] || "Professional Email"}

Dear Sir/Madam,

I hope you are doing well.

I am writing regarding ${prompt
      .replace(/\n/g, " ")
      .substring(0, 100)}.

Thank you for your time and consideration. Please let me know if you require any additional information.

Kind regards,

Your Name
`;

    return Response.json({
      text: email,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Failed to generate email.",
      },
      {
        status: 500,
      }
    );
  }
}