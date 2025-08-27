import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon; 
  title: string;
  description: string;
}

const FeatureCard =({ icon: Icon, title, description }: FeatureCardProps)=> {
  return (
    <div>
      <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
        <Icon className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6" />
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default FeatureCard