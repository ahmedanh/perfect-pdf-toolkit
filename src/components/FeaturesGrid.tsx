
import { 
  BookText,
  FileEdit,
  FileLock,
  FileSignature,
  FileText,
  ImagePlus,
  Merge,
  Scissors,
  Search,
  Share2,
  StickyNote,
  Upload
} from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: <FileEdit size={24} />,
      title: "Edit Text & Images",
      description: "Modify fonts, sizes, colors of text and adjust or replace images directly in your PDF."
    },
    {
      icon: <FileText size={24} />,
      title: "Format Conversion",
      description: "Convert PDFs to and from Word, Excel, PowerPoint while maintaining original formatting."
    },
    {
      icon: <FileSignature size={24} />,
      title: "E-Signatures",
      description: "Digitally sign documents or request signatures from others with built-in tracking."
    },
    {
      icon: <Upload size={24} />,
      title: "File Compression",
      description: "Reduce file size while preserving the quality of images and text clarity."
    },
    {
      icon: <FileLock size={24} />,
      title: "Security & Encryption",
      description: "Password protect and encrypt your sensitive PDF documents."
    },
    {
      icon: <Merge size={24} />,
      title: "Merge & Split",
      description: "Combine multiple PDFs into one or split large files into smaller documents."
    },
    {
      icon: <BookText size={24} />,
      title: "OCR Technology",
      description: "Convert scanned documents into searchable and editable text."
    },
    {
      icon: <Share2 size={24} />,
      title: "Collaborative Review",
      description: "Share documents and enable real-time team review and annotation."
    },
    {
      icon: <StickyNote size={24} />,
      title: "Annotation Tools",
      description: "Add notes, highlights, and drawings to facilitate document review."
    },
    {
      icon: <Scissors size={24} />,
      title: "Page Management",
      description: "Insert, delete, reorder, and extract pages within your PDFs."
    },
    {
      icon: <Search size={24} />,
      title: "Redaction Tools",
      description: "Permanently remove sensitive information from your documents."
    },
    {
      icon: <ImagePlus size={24} />,
      title: "Cloud Integration",
      description: "Seamlessly sync with Dropbox, Google Drive, and OneDrive."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful PDF Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to work with PDF documents in one professional toolkit
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
