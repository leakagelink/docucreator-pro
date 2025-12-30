
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import SEOMetadata from '@/components/SEOMetadata';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We've received your message and will respond shortly.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title="Contact Us - DocuCreator Pro | Get Help & Support"
        description="Contact DocuCreator Pro for support, inquiries, or feedback. We're here to help with your legal document needs. Email, phone, and office address available."
        keywords="contact DocuCreator Pro, legal document support, document generator help, customer support India"
        canonicalUrl="/contact"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-legal-navy mb-6 text-center">Contact Us</h1>
            <p className="text-lg text-center text-legal-gray mb-12 max-w-3xl mx-auto">
              Have questions about our services or need assistance? We're here to help. Reach out to our team using any of the methods below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-legal-light p-6 rounded-lg text-center">
                <div className="mx-auto w-12 h-12 bg-legal-gold rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold mb-2">Phone Support</h3>
                <p className="text-legal-gray mb-2">Mon-Fri: 9am - 6pm IST</p>
                <p className="font-medium text-legal-navy">+91 98765 43210</p>
              </div>
              
              <div className="bg-legal-light p-6 rounded-lg text-center">
                <div className="mx-auto w-12 h-12 bg-legal-gold rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold mb-2">Email Support</h3>
                <p className="text-legal-gray mb-2">24/7 Email Assistance</p>
                <p className="font-medium text-legal-navy">support@docucreatorpro.online</p>
              </div>
              
              <div className="bg-legal-light p-6 rounded-lg text-center">
                <div className="mx-auto w-12 h-12 bg-legal-gold rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold mb-2">Office Address</h3>
                <p className="text-legal-gray mb-2">Headquarters</p>
                <p className="font-medium text-legal-navy">123 Legal Avenue, Tech Park, Bangalore - 560001</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-legal-navy mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-legal-navy mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-legal-navy mb-1">
                      Your Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-legal-navy mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What is your message about?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-legal-navy mb-1">
                    Your Message
                  </label>
                  <Textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please describe your query or concern"
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-legal-navy hover:bg-opacity-90 w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-serif font-bold text-legal-navy mb-6 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-legal-light p-6 rounded-lg">
                  <h3 className="text-lg font-serif font-bold mb-2">How quickly will I receive a response?</h3>
                  <p>We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please contact us by phone.</p>
                </div>
                
                <div className="bg-legal-light p-6 rounded-lg">
                  <h3 className="text-lg font-serif font-bold mb-2">Do you offer technical support?</h3>
                  <p>Yes, our customer support team is equipped to handle technical issues related to document generation and account management.</p>
                </div>
                
                <div className="bg-legal-light p-6 rounded-lg">
                  <h3 className="text-lg font-serif font-bold mb-2">Can I request a custom document template?</h3>
                  <p>Yes, we offer custom template creation services. Please contact us with your specific requirements for a quote.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
