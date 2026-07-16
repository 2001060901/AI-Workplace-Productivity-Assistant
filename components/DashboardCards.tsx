import FeatureCard from "./FeatureCard";

export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

      <FeatureCard
        icon="📧"
        title="Email Generator"
        description="Generate professional workplace emails instantly."
      />

      <FeatureCard
        icon="📝"
        title="Meeting Summarizer"
        description="Summarize long meeting notes into concise reports."
      />

      <FeatureCard
        icon="✅"
        title="Task Planner"
        description="Create organized daily work plans."
      />

      <FeatureCard
        icon="🔍"
        title="Research Assistant"
        description="Generate research summaries and key insights."
      />

      <FeatureCard
        icon="🤖"
        title="AI Chat"
        description="Ask workplace questions and receive intelligent responses."
      />

      <FeatureCard
        icon="⚙️"
        title="Settings"
        description="Customize your assistant and preferences."
      />

    </div>
  );
}