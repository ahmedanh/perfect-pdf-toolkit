
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-pdf-primary" />
          <span className="text-xl font-bold text-gray-800">PerfectPDF</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-pdf-primary transition-colors">Features</a>
          <a href="#tools" className="text-gray-600 hover:text-pdf-primary transition-colors">Tools</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-pdf-primary transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-pdf-primary transition-colors">Pricing</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-pdf-primary border-pdf-primary hover:bg-pdf-light">Log In</Button>
          <Button className="bg-pdf-primary hover:bg-pdf-accent">Sign Up Free</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 hover:text-pdf-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#tools" className="text-gray-600 hover:text-pdf-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Tools</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-pdf-primary transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-pdf-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="text-pdf-primary border-pdf-primary hover:bg-pdf-light w-full">Log In</Button>
              <Button className="bg-pdf-primary hover:bg-pdf-accent w-full">Sign Up Free</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
