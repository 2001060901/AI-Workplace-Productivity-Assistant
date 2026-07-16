type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border">

      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="text-gray-500 mt-3">
        {description}
      </p>

    </div>
  );
}