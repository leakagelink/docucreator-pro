
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle2, Save } from 'lucide-react';

interface DocumentFormProps {
  category: string;
  documentType: string;
  onComplete: (formData: any) => void;
}

const DocumentForm: React.FC<DocumentFormProps> = ({ category, documentType, onComplete }) => {
  const [formData, setFormData] = useState<any>({});
  const [formFields, setFormFields] = useState<any[]>([]);
  const [date, setDate] = useState<Date | undefined>(new Date());

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add current date to form data
    const finalData = {
      ...formData,
      documentType: documentType,
      category: category,
      date: date
    };
    onComplete(finalData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <Card className="bg-white document-shadow">
        <CardContent className="p-6">
          <h2 className="text-2xl font-serif font-bold text-legal-navy mb-6">Complete Document Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {formFields.map(field => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id} className="font-medium">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </Label>
                
                {field.type === 'input' && (
                  <Input
                    id={field.id}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    required={field.required}
                    className="w-full border-gray-300 focus:border-legal-navy focus:ring-legal-navy"
                  />
                )}
                
                {field.type === 'textarea' && (
                  <Textarea
                    id={field.id}
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    required={field.required}
                    className="w-full border-gray-300 focus:border-legal-navy focus:ring-legal-navy"
                    rows={4}
                  />
                )}
                
                {field.type === 'checkbox' && (
                  <div className="flex items-start space-x-2 mt-1">
                    <Checkbox
                      id={field.id}
                      checked={formData[field.id] || false}
                      onCheckedChange={(checked) => handleInputChange(field.id, checked)}
                      required={field.required}
                    />
                    <Label htmlFor={field.id} className="text-sm text-gray-700">
                      {field.label2}
                    </Label>
                  </div>
                )}
                
                {field.type === 'date' && (
                  <div className="flex items-center">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}
                
                {field.type === 'signature' && (
                  <div className="border border-gray-300 rounded-md p-4 bg-legal-paper">
                    <p className="text-sm text-gray-500 mb-2">Click to add your signature or upload an image</p>
                    <div className="signature-pad flex items-center justify-center">
                      <p className="text-gray-400 text-sm">Signature will appear here</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" className="border-legal-navy text-legal-navy">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button type="submit" className="bg-legal-navy hover:bg-opacity-90">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Generate Document
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentForm;
