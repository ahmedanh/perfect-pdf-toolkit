
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Ultimate <span className="gradient-text">PDF Toolkit</span> for Everyone
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Edit, convert, sign, and manage your PDF documents with our all-in-one solution. <span className="text-pdf-primary font-semibold">100% Free Forever.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-pdf-primary hover:bg-pdf-accent text-white gap-2">
                <FileUp size={18} />
                Upload PDF
              </Button>
              <Button size="lg" variant="outline" className="border-pdf-primary text-pdf-primary hover:bg-pdf-light">
                Try Now
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
              </div>
              <p className="ml-4 text-sm text-muted-foreground">Trusted by <span className="font-semibold">10,000+</span> professionals</p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-secondary/50 p-4 rounded-xl shadow-xl rotate-2 transform transition-transform hover:-rotate-1 border border-border">
              <div className="bg-background/50 rounded-lg p-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">PerfectPDF.pdf</div>
                </div>
                <div className="bg-background rounded p-4 shadow-inner">
                  <div className="h-6 bg-secondary/70 rounded mb-4 w-3/4 animate-pulse-slow"></div>
                  <div className="h-4 bg-secondary/70 rounded mb-3 animate-pulse-slow"></div>
                  <div className="h-4 bg-secondary/70 rounded mb-3 w-5/6 animate-pulse-slow"></div>
                  <div className="h-4 bg-secondary/70 rounded mb-3 w-4/5 animate-pulse-slow"></div>
                  <div className="h-32 bg-secondary/70 rounded mb-4 animate-pulse-slow"></div>
                  <div className="h-4 bg-secondary/70 rounded mb-3 animate-pulse-slow"></div>
                  <div className="h-4 bg-secondary/70 rounded w-3/4 animate-pulse-slow"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-pdf-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                PDF Editor
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-pdf-light rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-pdf-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
    </section>
  );
};

export default HeroSection;
