// components/Solutions.tsx

import { Zap, ShoppingCart, Users, Settings } from 'lucide-react'; // Using Lucide icons for placeholders

const solutionsData = [
  { 
    title: 'AI Agents', 
    description: 'Automate tasks, analyze data, and provide personalized interactions.',
    icon: Zap 
  },
  { 
    title: 'Marketplaces', 
    description: 'Connect buyers and sellers with a secure, scalable platform.',
    icon: ShoppingCart 
  },
  { 
    title: 'Web Portals', 
    description: 'Centralized access for partners, clients, or employees to vital resources.',
    icon: Users 
  },
  { 
    title: 'Custom', 
    description: 'Tailored software solutions designed from the ground up for your needs.',
    icon: Settings 
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-key-text mb-4">
            Solutions For Every Use Case
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            We work with all our clients to build the same types of systems. We custom build, and optimize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionsData.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">
                <solution.icon className="h-8 w-8 text-key-primary" />
              </div>
              <h3 className="text-xl font-bold text-key-text mb-2">{solution.title}</h3>
              <p className="text-gray-600 text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;