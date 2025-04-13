
import { ArrowRight, CheckCircle2, FileUp, Settings, Zap } from "lucide-react";

const StepCard = ({ 
  number, 
  icon, 
  title, 
  description 
}: { 
  number: number; 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 h-full">
        <div className="absolute -top-4 -left-4 bg-pdf-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
        <div className="text-pdf-primary mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileUp className="w-6 h-6" />,
      title: "Upload Your PDF",
      description: "Upload the PDF document you need to edit or process from your computer or cloud storage."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Select Your Tool",
      description: "Choose from our comprehensive set of PDF tools based on what you need to accomplish."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process Instantly",
      description: "Our powerful engine will process your document quickly with professional-quality results."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Download & Share",
      description: "Save your processed PDF to your device or share it directly via email or cloud services."
    }
  ];
  
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your PDFs in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
          
          {/* Connector lines */}
          <div className="hidden lg:block absolute top-1/2 left-[25%] w-[50%] border-t-2 border-dashed border-pdf-light z-0"></div>
          <div className="hidden lg:flex absolute top-1/2 left-[25%] -translate-y-1/2 justify-center">
            <ArrowRight className="text-pdf-primary" size={24} />
          </div>
          <div className="hidden lg:flex absolute top-1/2 left-[50%] -translate-y-1/2 justify-center">
            <ArrowRight className="text-pdf-primary" size={24} />
          </div>
          <div className="hidden lg:flex absolute top-1/2 left-[75%] -translate-y-1/2 justify-center">
            <ArrowRight className="text-pdf-primary" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
