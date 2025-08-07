
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle2, Save, FileText, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DocumentFormProps {
  category: string;
  documentType: string;
  onComplete: (formData: any) => void;
}

const DocumentForm: React.FC<DocumentFormProps> = ({ category, documentType, onComplete }) => {
  const [formData, setFormData] = useState<any>({});
  const [formFields, setFormFields] = useState<any[]>([]);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // In a real app, this would fetch from an API or be more sophisticated
    // This is a simplified example that shows different fields based on document type
    
    let fields = [];
    
    // Common fields for all documents
    const commonFields = [
      { id: 'title', label: 'Document Title', type: 'input', required: true },
      { id: 'parties', label: 'Parties Involved', type: 'textarea', required: true },
    ];
    
    fields = [...commonFields];
    
    // Add document-specific fields
    if (category === 'agreements' && documentType === 'rental') {
      fields = [
        ...fields,
        { id: 'propertyAddress', label: 'Property Address', type: 'input', required: true },
        { id: 'rentalAmount', label: 'Monthly Rent Amount', type: 'input', required: true },
        { id: 'startDate', label: 'Start Date', type: 'date', required: true },
        { id: 'endDate', label: 'End Date', type: 'date', required: true },
        { id: 'securityDeposit', label: 'Security Deposit', type: 'input', required: true },
        { id: 'terms', label: 'Additional Terms', type: 'textarea', required: false },
      ];
    } else if (category === 'contracts' && documentType === 'business') {
      fields = [
        ...fields,
        { id: 'scope', label: 'Scope of Work', type: 'textarea', required: true },
        { id: 'payment', label: 'Payment Terms', type: 'textarea', required: true },
        { id: 'deliverables', label: 'Deliverables', type: 'textarea', required: true },
        { id: 'timeline', label: 'Project Timeline', type: 'textarea', required: true },
      ];
    } else if (category === 'legaldocs' && documentType === 'affidavit') {
      fields = [
        ...fields,
        { id: 'affiantName', label: 'Affiant Name', type: 'input', required: true },
        { id: 'affiantAddress', label: 'Affiant Address', type: 'input', required: true },
        { id: 'statement', label: 'Statement of Facts', type: 'textarea', required: true },
        { id: 'oath', label: 'Oath Declaration', type: 'checkbox', required: true, label2: 'I solemnly affirm that the contents of this affidavit are true to the best of my knowledge.' },
      ];
    } else if (category === 'confidential' && documentType === 'nda') {
      fields = [
        ...fields,
        { id: 'confidentialInfo', label: 'Definition of Confidential Information', type: 'textarea', required: true },
        { id: 'purpose', label: 'Purpose of Disclosure', type: 'textarea', required: true },
        { id: 'duration', label: 'Duration of Agreement (in months)', type: 'input', required: true },
        { id: 'obligations', label: 'Obligations of Receiving Party', type: 'textarea', required: true },
      ];
    } else {
      // Generic fields for other document types
      fields = [
        ...fields,
        { id: 'details', label: 'Document Details', type: 'textarea', required: true },
        { id: 'termLength', label: 'Term Length (in months)', type: 'input', required: false },
        { id: 'additionalTerms', label: 'Additional Terms', type: 'textarea', required: false },
      ];
    }
    
    // Add signature fields to all documents
    fields = [
      ...fields,
      { id: 'signature', label: 'Digital Signature', type: 'signature', required: true },
      { id: 'date', label: 'Date', type: 'date', required: true },
    ];
    
    setFormFields(fields);
  }, [category, documentType]);

  const handleInputChange = (id: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    // Simulate save operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    // Here you would typically save to localStorage or backend
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Add current date to form data
    const finalData = {
      ...formData,
      documentType: documentType,
      category: category,
      date: date
    };
    
    setIsSubmitting(false);
    onComplete(finalData);
  };

  const getDocumentTypeDisplayName = () => {
    const categoryData = {
      'agreements': 'Agreement',
      'contracts': 'Contract',
      'legaldocs': 'Legal Document',
      'confidential': 'Confidentiality Document'
    };
    return categoryData[category as keyof typeof categoryData] || 'Document';
  };

  return (
    <div className="mobile-container my-4 md:my-8">
      <Card className="bg-card shadow-lg border-border">
        <CardHeader className="border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="bg-legal-navy/10 p-2 rounded-lg">
              <FileText className="h-5 w-5 md:h-6 md:w-6 text-legal-navy" />
            </div>
            <div>
              <CardTitle className="text-lg md:text-2xl font-serif font-bold text-legal-navy">
                Complete Document Details
              </CardTitle>
              <p className="text-sm md:text-base text-muted-foreground mt-1">
                Fill in the required information for your {getDocumentTypeDisplayName().toLowerCase()}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {formFields.map(field => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id} className="text-sm md:text-base font-medium text-foreground">
                  {field.label} {field.required && <span className="text-destructive">*</span>}
                </Label>
                
                {field.type === 'input' && (
                  <Input
                    id={field.id}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    required={field.required}
                    className="w-full h-11 md:h-12 border-input focus:border-legal-navy focus:ring-legal-navy/20 transition-colors touch-target"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                  />
                )}
                
                {field.type === 'textarea' && (
                  <Textarea
                    id={field.id}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    required={field.required}
                    className="w-full min-h-[100px] md:min-h-[120px] border-input focus:border-legal-navy focus:ring-legal-navy/20 transition-colors resize-y"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    rows={4}
                  />
                )}
                
                {field.type === 'checkbox' && (
                  <div className="flex items-start space-x-3 p-3 md:p-4 bg-muted/30 rounded-lg border border-border touch-target">
                    <Checkbox
                      id={field.id}
                      checked={formData[field.id] || false}
                      onCheckedChange={(checked) => handleInputChange(field.id, checked)}
                      required={field.required}
                      className="mt-0.5 data-[state=checked]:bg-legal-navy data-[state=checked]:border-legal-navy"
                    />
                    <Label htmlFor={field.id} className="text-sm md:text-base text-foreground leading-relaxed cursor-pointer">
                      {field.label2}
                    </Label>
                  </div>
                )}
                
                {field.type === 'date' && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-11 md:h-12 justify-start text-left font-normal touch-target",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                )}
                
                {field.type === 'signature' && (
                  <div className="border-2 border-dashed border-border rounded-lg p-6 md:p-8 bg-muted/20 text-center touch-target">
                    <div className="space-y-2">
                      <div className="w-12 h-12 md:w-16 md:w-16 mx-auto bg-legal-navy/10 rounded-full flex items-center justify-center">
                        <FileText className="h-6 w-6 md:h-8 md:w-8 text-legal-navy" />
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Digital signature will be applied during document generation
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground/70">
                        Your signature will be legally binding as per IT Act 2000
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 md:pt-6 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleSaveDraft}
                  disabled={isSaving}
                  className="w-full sm:w-auto h-11 md:h-12 border-legal-navy text-legal-navy hover:bg-legal-navy/5 touch-target order-2 sm:order-1"
                >
                  {isSaving ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  Save Draft
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-11 md:h-12 bg-legal-navy hover:bg-legal-navy/90 text-white touch-target order-1 sm:order-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                  )}
                  Generate Document
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentForm;
