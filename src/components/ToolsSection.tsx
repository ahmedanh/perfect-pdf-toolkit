import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp, Check, Loader2, FileType } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { 
  convertPdf, 
  isPdfFile, 
  downloadBlob,
  ConversionFormat,
  getFileExtension 
} from "@/utils/pdfUtils";

const ToolsSection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("convert");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSelectedFile(null);
    setIsProcessing(false);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    
    if (!files || files.length === 0) {
      return;
    }
    
    const file = files[0];
    
    if (activeTab === "convert") {
      if (!isPdfFile(file)) {
        toast("Invalid file type", {
          description: "Please select a PDF file",
          variant: "destructive"
        });
        event.target.value = "";
        return;
      }
    }
    
    setSelectedFile(file);
    toast("File selected", {
      description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`,
    });
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    
    const files = event.dataTransfer.files;
    
    if (!files || files.length === 0) {
      return;
    }
    
    const file = files[0];
    
    if (activeTab === "convert") {
      if (!isPdfFile(file)) {
        toast("Invalid file type", {
          description: "Please select a PDF file",
          variant: "destructive"
        });
        return;
      }
    }
    
    setSelectedFile(file);
    toast("File selected", {
      description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`,
    });
  };
  
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleConvert = async (format: ConversionFormat) => {
    if (!selectedFile) {
      toast("No file selected", {
        description: "Please select a PDF file to convert",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      const convertedFile = await convertPdf(selectedFile, format);
      
      if (convertedFile) {
        const newFilename = selectedFile.name.replace(
          `.${getFileExtension(selectedFile.name)}`, 
          `.${format}`
        );
        downloadBlob(convertedFile, newFilename);
      }
    } catch (error) {
      toast("Conversion failed", {
        description: "There was an error converting your file",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section id="tools" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">PDF Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free and powerful tools to transform your PDF workflow
          </p>
        </div>
        
        <Tabs defaultValue="convert" value={activeTab} onValueChange={handleTabChange} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="edit">Edit PDF</TabsTrigger>
            <TabsTrigger value="convert">Convert PDF</TabsTrigger>
            <TabsTrigger value="sign">Sign PDF</TabsTrigger>
            <TabsTrigger value="compress">Compress PDF</TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit" className="p-6 bg-card rounded-xl shadow-md border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Edit PDF Documents</h3>
            <p className="text-muted-foreground mb-6">
              Modify text, images, and pages directly in your PDF file without converting to another format.
              Change fonts, colors, and resize elements with precision.
            </p>
            <div 
              className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-background mb-6"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <FileUp className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-2">Drop your PDF file here or</p>
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                onChange={handleFileSelect}
                accept=".pdf"
              />
              <Button 
                onClick={triggerFileSelect}
                disabled={isProcessing}
              >
                Select File
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="convert" className="p-6 bg-card rounded-xl shadow-md border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Convert PDF Files</h3>
            <p className="text-muted-foreground mb-6">
              Transform PDFs to Word, Excel, PowerPoint or convert other formats to PDF while preserving the original layout.
            </p>
            <div 
              className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-background mb-6"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {!selectedFile ? (
                <>
                  <FileUp className="w-12 h-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">Drop your PDF file here or</p>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    className="hidden" 
                    onChange={handleFileSelect}
                    accept=".pdf"
                  />
                  <Button 
                    onClick={triggerFileSelect}
                    disabled={isProcessing}
                  >
                    Select File
                  </Button>
                </>
              ) : (
                <div className="w-full">
                  <div className="flex items-center justify-center mb-6">
                    <FileType className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <p className="text-foreground font-medium">{selectedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    {!isProcessing && (
                      <Check className="w-5 h-5 text-green-500 ml-3" />
                    )}
                  </div>
                  
                  {isProcessing ? (
                    <div className="flex justify-center">
                      <Button disabled>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Converting...
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-center mb-4 text-muted-foreground">Convert to:</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <Button 
                          variant="outline" 
                          onClick={() => handleConvert('docx')}
                          className="flex items-center justify-center"
                        >
                          <span className="font-semibold">DOCX</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleConvert('xlsx')}
                          className="flex items-center justify-center"
                        >
                          <span className="font-semibold">XLSX</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleConvert('pptx')}
                          className="flex items-center justify-center"
                        >
                          <span className="font-semibold">PPTX</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleConvert('jpg')}
                          className="flex items-center justify-center"
                        >
                          <span className="font-semibold">JPG</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleConvert('png')}
                          className="flex items-center justify-center"
                        >
                          <span className="font-semibold">PNG</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleConvert('txt')}
                          className="flex items-center justify-center"
                        >
                          <span className="font-semibold">TXT</span>
                        </Button>
                      </div>
                      <div className="mt-4 text-center">
                        <Button 
                          variant="ghost" 
                          onClick={() => {
                            setSelectedFile(null);
                            if (fileInputRef.current) {
                              fileInputRef.current.value = "";
                            }
                          }}
                        >
                          Select different file
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="sign" className="p-6 bg-card rounded-xl shadow-md border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">E-Sign Documents</h3>
            <p className="text-muted-foreground mb-6">
              Add legally-binding electronic signatures to your documents or request signatures from others.
            </p>
            <div 
              className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-background mb-6"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <FileUp className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-2">Drop your PDF file here or</p>
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                onChange={handleFileSelect}
                accept=".pdf"
              />
              <Button 
                onClick={triggerFileSelect}
                disabled={isProcessing}
              >
                Select File
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="compress" className="p-6 bg-card rounded-xl shadow-md border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Compress PDFs</h3>
            <p className="text-muted-foreground mb-6">
              Reduce PDF file size while maintaining document quality, making it easier to share and store.
            </p>
            <div 
              className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-background mb-6"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <FileUp className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-2">Drop your PDF file here or</p>
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                onChange={handleFileSelect}
                accept=".pdf"
              />
              <Button 
                onClick={triggerFileSelect}
                disabled={isProcessing}
              >
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
