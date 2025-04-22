
import { toast } from "@/components/ui/sonner";

export type ConversionFormat = 
  | "docx" 
  | "xlsx" 
  | "pptx" 
  | "jpg" 
  | "png" 
  | "txt";

// Simple function to get file extension
export const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toLowerCase() || '';
};

// Function to validate if file is a PDF
export const isPdfFile = (file: File): boolean => {
  const extension = getFileExtension(file.name);
  return extension === 'pdf';
};

// Function to convert PDF to another format
export const convertPdf = async (
  file: File, 
  targetFormat: ConversionFormat
): Promise<Blob | null> => {
  // In a real application, this would call an API service
  // For now, we'll simulate the conversion process
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      try {
        // In reality, you would call a PDF processing service here
        // and return the converted file
        
        // Create a mock file with the new extension to demonstrate
        const mockData = new Blob([file], { type: getMimeType(targetFormat) });
        resolve(mockData);
        
        toast("Conversion successful", {
          description: `Converted to ${targetFormat.toUpperCase()} format`,
        });
      } catch (error) {
        toast("Conversion failed", {
          description: "Could not convert the PDF file",
          variant: "destructive",
        });
        resolve(null);
      }
    }, 2000); // Simulate 2 second processing time
  });
};

// Function to get MIME type for different formats
export const getMimeType = (format: ConversionFormat): string => {
  switch (format) {
    case 'docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    case 'xlsx':
      return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    case 'pptx':
      return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    case 'jpg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'txt':
      return 'text/plain';
    default:
      return 'application/octet-stream';
  }
};

// Function to download blob as a file
export const downloadBlob = (blob: Blob, filename: string): void => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
