
import { ReactNode } from 'react';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-farm-green mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
}

const FeatureSection = ({ title, subtitle, features }: FeatureSectionProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
