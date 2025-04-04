
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto py-12 px-6 max-w-4xl">
          <h1 className="text-3xl font-serif font-bold text-legal-navy mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Introduction</h2>
            <p>
              DocuCreator Pro ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you register on the website, express interest in obtaining information about us or our products, or otherwise contact us. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Name and contact details (email address, phone number)</li>
              <li>Billing information and payment details</li>
              <li>User content (such as document data you input into our system)</li>
              <li>Account credentials</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Providing and maintaining our service</li>
              <li>Processing your payments</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Sending administrative information</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Improving our services</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Third-Party Advertising</h2>
            <p>
              We may use third-party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites to provide advertisements about goods and services of interest to you. Google AdSense is one of the advertising services we use.
            </p>
            <p>
              Google AdSense uses cookies to serve ads based on your visit to our site and other sites on the internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-legal-gold hover:underline">Google Ads Settings</a>.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Data Security</h2>
            <p>
              We have implemented appropriate security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-serif font-bold text-legal-navy mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none pl-6 my-4">
              <li>Email: support@docucreatorpro.online</li>
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

export default PrivacyPolicy;
