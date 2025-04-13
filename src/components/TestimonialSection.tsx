
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
};

const Testimonial = ({ quote, author, role, company, image }: TestimonialProps) => {
  return (
    <Card className="bg-white shadow-md h-full">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-pdf-light mb-4" />
        <p className="text-gray-700 mb-6 italic">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 border-2 border-pdf-light mr-4">
            <AvatarImage src={image} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-gray-600 text-sm">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "PerfectPDF has revolutionized how our legal team handles document processing. The electronic signature feature alone has saved us countless hours.",
      author: "Sarah Johnson",
      role: "Legal Director",
      company: "Westfield Partners",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "As a content creator, I constantly need to edit PDFs on the go. This toolkit gives me all the professional features I need without the complexity.",
      author: "Michael Chen",
      role: "Creative Director",
      company: "Design Works",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The OCR technology is exceptional. We've digitized our entire archive of printed documents and made them searchable with perfect accuracy.",
      author: "James Wilson",
      role: "Digital Archivist",
      company: "National Museum",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-white to-pdf-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by professionals across industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
