
import React from 'react';
import { 
  PawPrint, 
  Camera, 
  Heart, 
  FileText, 
  Search, 
  MessageSquare, 
  PieChart, 
  Languages, 
  ShieldCheck 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-glow interactive-card">
      <div className="w-12 h-12 rounded-full bg-vetprimary/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-full h-1/2 bg-vetprimary/5 -skew-y-3 z-0"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetmuted text-vetprimary mb-4">
            <PawPrint size={16} className="mr-2" />
            <span>Comprehensive Pet Care</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Features for <span className="text-gradient">Complete Pet Health</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            VetGPT combines cutting-edge AI with veterinary expertise to provide the best possible care for your pets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Camera className="h-6 w-6 text-vetprimary" />}
            title="Image Analysis"
            description="Upload photos of your pet for visual assessment of conditions, symptoms, and overall health status."
          />
          
          <FeatureCard
            icon={<MessageSquare className="h-6 w-6 text-vetprimary" />}
            title="Expert Consultations"
            description="Get detailed answers to your pet health questions with the knowledge of veterinary medicine."
          />
          
          <FeatureCard
            icon={<PieChart className="h-6 w-6 text-vetprimary" />}
            title="Health Monitoring"
            description="Track your pet's weight, diet, and vital statistics to ensure they stay in optimal health."
          />
          
          <FeatureCard
            icon={<Search className="h-6 w-6 text-vetprimary" />}
            title="Research Capabilities"
            description="Access the latest veterinary research and information relevant to your pet's specific needs."
          />
          
          <FeatureCard
            icon={<FileText className="h-6 w-6 text-vetprimary" />}
            title="Detailed Reports"
            description="Receive comprehensive consultation summaries and care plans for your records."
          />
          
          <FeatureCard
            icon={<Heart className="h-6 w-6 text-vetprimary" />}
            title="Compassionate Support"
            description="Get emotional support and practical guidance for pet loss and end-of-life care decisions."
          />
          
          <FeatureCard
            icon={<Languages className="h-6 w-6 text-vetprimary" />}
            title="Multilingual Support"
            description="Communicate in your preferred language for the most comfortable experience."
          />
          
          <FeatureCard
            icon={<ShieldCheck className="h-6 w-6 text-vetprimary" />}
            title="Privacy Protection"
            description="Your pet's data and your personal information are kept secure and confidential."
          />
          
          <FeatureCard
            icon={<PawPrint className="h-6 w-6 text-vetprimary" />}
            title="Multi-Species Support"
            description="Get help for all types of pets, from dogs and cats to exotics and wildlife."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
