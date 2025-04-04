
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6 max-w-4xl">
          <h1 className="text-3xl font-serif font-bold text-legal-navy mb-6">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to DocuCreator Pro. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">2. Using Our Services</h2>
            <p>
              You must follow any policies made available to you within the Services. You may use our Services only as permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">3. Your DocuCreator Pro Account</h2>
            <p>
              You may need to create an account to use some of our Services. You are responsible for safeguarding your account, and for any activities or actions under your account. We recommend using a strong password and keeping it confidential.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">4. Privacy and Copyright Protection</h2>
            <p>
              Our privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree to our collection and use of data according to our privacy policy.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">5. Content and Intellectual Property Rights</h2>
            <p>
              The content displayed on the website is the property of DocuCreator Pro and/or its licensors. You may not use, reproduce, or distribute any content from our website without our express written permission.
            </p>
            <p>
              You retain ownership of any intellectual property rights that you hold in content you create, upload, or share on or through our Services. When you upload content, you give us a worldwide license to use, host, store, reproduce, modify, and distribute such content.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">6. Advertising</h2>
            <p>
              Our Services may display advertisements. In consideration for your access to and use of the Services, you agree that we and our advertising partners may place advertising on the Services.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">7. Disclaimer of Warranties</h2>
            <p>
              Our Services are provided "as is" without any warranties, either express or implied. DocuCreator Pro does not warrant that our Services will be uninterrupted or error-free.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, DocuCreator Pro will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Services.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">9. Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time. The changes will not be retroactive, and the most current version of the Terms will govern our relationship with you.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-none pl-6 my-4">
              <li>Email: support@docucreatorpro.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Legal Avenue, Tech Park, Bangalore - 560001</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
