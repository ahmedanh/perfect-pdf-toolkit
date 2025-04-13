
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-pdf-primary" />
          <span className="text-xl font-bold text-foreground">PerfectPDF</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-pdf-primary transition-colors">Features</a>
          <a href="#tools" className="text-muted-foreground hover:text-pdf-primary transition-colors">Tools</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-pdf-primary transition-colors">How It Works</a>
          {/* Removed pricing link as everything is free now */}
        </nav>
        
        <div className="hidden md:flex items-center">
          <Button className="bg-pdf-primary hover:bg-pdf-accent">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-muted-foreground hover:text-pdf-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#tools" className="text-muted-foreground hover:text-pdf-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Tools</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-pdf-primary transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <div className="pt-2">
              <Button className="bg-pdf-primary hover:bg-pdf-accent w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
