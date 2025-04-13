
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

type PlanProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
};

const PlanCard = ({ name, price, description, features, isPopular, ctaText }: PlanProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-8 border ${isPopular ? 'border-pdf-primary' : 'border-gray-100'} relative`}>
      {isPopular && (
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-pdf-primary text-white text-sm px-3 py-1 rounded-full font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Free" && <span className="text-gray-500 ml-1">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${isPopular ? 'bg-pdf-primary hover:bg-pdf-accent' : 'bg-gray-800 hover:bg-gray-700'}`}
      >
        {ctaText}
      </Button>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "For occasional PDF needs",
      features: [
        "Edit basic text and images",
        "Convert between 3 formats",
        "Basic compression",
        "5 PDFs per month",
        "2 MB file size limit"
      ],
      ctaText: "Get Started",
    },
    {
      name: "Professional",
      price: "$12.99",
      description: "For regular PDF work",
      features: [
        "Advanced text and image editing",
        "Convert between all formats",
        "Advanced compression",
        "E-signatures",
        "OCR technology",
        "Unlimited PDFs",
        "50 MB file size limit"
      ],
      isPopular: true,
      ctaText: "Try 7 Days Free",
    },
    {
      name: "Enterprise",
      price: "$29.99",
      description: "For business teams",
      features: [
        "All Professional features",
        "Team collaboration",
        "Advanced security features",
        "API access",
        "Priority support",
        "Audit trails",
        "500 MB file size limit"
      ],
      ctaText: "Contact Sales",
    }
  ];
  
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your organization?</p>
          <Button variant="outline" className="border-pdf-primary text-pdf-primary hover:bg-pdf-light">
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
