
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

type PlanProps = {
  name: string;
  description: string;
  features: string[];
  ctaText: string;
};

const PlanCard = ({ name, description, features, ctaText }: PlanProps) => {
  return (
    <div className="glass-card p-8 relative">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-pdf-primary">Free</span>
        <span className="text-muted-foreground ml-1">forever</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className="w-full bg-pdf-primary hover:bg-pdf-accent">
        {ctaText}
      </Button>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Complete Solution",
      description: "All professional PDF features - completely free",
      features: [
        "Edit text and images directly",
        "Convert between all formats",
        "E-signature capabilities",
        "Advanced compression",
        "Password protection & encryption",
        "Merge and split PDFs",
        "OCR technology",
        "Online sharing & collaboration",
        "Annotation & commenting tools",
        "Page management tools",
        "Redaction tools",
        "Cloud integration",
        "Accessibility features",
        "No file size limits"
      ],
      ctaText: "Get Started Now",
    }
  ];
  
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">100% Free Professional PDF Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe PDF tools should be accessible to everyone
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
