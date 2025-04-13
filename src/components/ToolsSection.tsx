
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp } from "lucide-react";

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our PDF Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try our most popular tools to transform your PDF workflow - all completely free
          </p>
        </div>
        
        <Tabs defaultValue="edit" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="edit">Edit PDF</TabsTrigger>
            <TabsTrigger value="convert">Convert PDF</TabsTrigger>
            <TabsTrigger value="sign">Sign PDF</TabsTrigger>
            <TabsTrigger value="compress">Compress PDF</TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit" className="p-6 glass-card">
            <h3 className="text-2xl font-semibold mb-4">Edit PDF Documents</h3>
            <p className="text-muted-foreground mb-6">
              Modify text, images, and pages directly in your PDF file without converting to another format.
              Change fonts, colors, and resize elements with precision.
            </p>
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-background/30 mb-6">
              <FileUp className="w-12 h-12 text-pdf-primary mb-4" />
              <p className="text-muted-foreground mb-2">Drop your PDF file here or</p>
              <Button className="bg-pdf-primary hover:bg-pdf-accent">
                Select File
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="convert" className="p-6 glass-card">
            <h3 className="text-2xl font-semibold mb-4">Convert PDF Files</h3>
            <p className="text-muted-foreground mb-6">
              Transform PDFs to Word, Excel, PowerPoint or convert other formats to PDF while preserving the original layout.
            </p>
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-background/30 mb-6">
              <FileUp className="w-12 h-12 text-pdf-primary mb-4" />
              <p className="text-muted-foreground mb-2">Drop your file here or</p>
              <Button className="bg-pdf-primary hover:bg-pdf-accent">
                Select File
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="sign" className="p-6 glass-card">
            <h3 className="text-2xl font-semibold mb-4">E-Sign Documents</h3>
            <p className="text-muted-foreground mb-6">
              Add legally-binding electronic signatures to your documents or request signatures from others.
            </p>
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-background/30 mb-6">
              <FileUp className="w-12 h-12 text-pdf-primary mb-4" />
              <p className="text-muted-foreground mb-2">Drop your PDF file here or</p>
              <Button className="bg-pdf-primary hover:bg-pdf-accent">
                Select File
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="compress" className="p-6 glass-card">
            <h3 className="text-2xl font-semibold mb-4">Compress PDFs</h3>
            <p className="text-muted-foreground mb-6">
              Reduce PDF file size while maintaining document quality, making it easier to share and store.
            </p>
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-background/30 mb-6">
              <FileUp className="w-12 h-12 text-pdf-primary mb-4" />
              <p className="text-muted-foreground mb-2">Drop your PDF file here or</p>
              <Button className="bg-pdf-primary hover:bg-pdf-accent">
                Select File
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ToolsSection;
