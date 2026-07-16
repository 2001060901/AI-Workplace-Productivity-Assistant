export function generateEmail(
  purpose: string,
  audience: string,
  tone: string,
  instructions: string
) {
  return `Subject: ${purpose}

Dear ${audience},

I hope you are doing well.

I am writing regarding ${purpose}.

${instructions}

This email has been written using a ${tone.toLowerCase()} tone.

Please let me know if you require any additional information.

Kind regards,

Your Name`;
}

export function summarizeMeeting(notes: string) {
  const lines = notes
    .split(".")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const keyPoints = lines.slice(0, 3);

  return `📋 MEETING SUMMARY

Summary:
${keyPoints.join(". ")}

---------------------------------

✅ Key Decisions
• Continue with the current project
• Complete assigned tasks before the deadline
• Improve communication among team members

---------------------------------

📌 Action Items
• Complete pending tasks
• Share progress updates
• Schedule the next meeting

---------------------------------

🎯 Next Steps
• Review completed work
• Prepare for the next milestone`;
}

export function generateTaskPlan(task: string) {
  return `📅 DAILY TASK PLAN

Task:
${task}

08:00 - Review requirements
09:00 - Plan the work
10:30 - Complete important tasks
13:00 - Test and review
15:00 - Final improvements
16:00 - Submit or share progress`;
}

export function researchTopic(topic: string) {
  return `🔍 RESEARCH REPORT

Topic:
${topic}

Overview:
${topic} is an important subject that is widely used in modern workplaces.

Key Points:
• Definition
• Benefits
• Challenges
• Applications
• Future Trends

Conclusion:
Understanding ${topic} helps improve productivity and decision-making.`;
}

export function chatbotResponse(message: string) {
  const text = message.toLowerCase();

  if (text.includes("hello")) {
    return "Hello! I'm your AI Workplace Productivity Assistant. How can I help you today?";
  }

  if (text.includes("email")) {
    return "I can help you generate professional workplace emails.";
  }

  if (text.includes("meeting")) {
    return "Paste your meeting notes and I'll create a structured summary.";
  }

  if (text.includes("task")) {
    return "I can generate a daily task plan for you.";
  }

  return "I'm here to help with emails, meetings, research, planning, and workplace productivity.";
}