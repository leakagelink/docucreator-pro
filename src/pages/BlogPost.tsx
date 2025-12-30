
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';
import { Calendar, Clock, ArrowLeft, Share2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

// FAQ items for structured data
interface FAQItem {
  question: string;
  answer: string;
}

// Blog post content data
const blogPostsData: Record<string, {
  title: string;
  description: string;
  keywords: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
  faqItems?: FAQItem[];
}> = {
  'how-to-create-rent-agreement-india': {
    title: 'How to Create a Rent Agreement in India: Complete Guide 2024',
    description: 'Learn the step-by-step process of creating a legally valid rent agreement in India. Understand the key clauses, stamp duty requirements, and registration process.',
    keywords: 'rent agreement India, rental agreement format, how to make rent agreement, rental contract template, landlord tenant agreement',
    date: '2024-12-28',
    readTime: '8 min read',
    category: 'Legal Guides',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>What is a Rent Agreement?</h2>
        <p>
          A rent agreement, also known as a rental agreement or lease agreement, is a legal document that establishes the terms and conditions between a landlord (property owner) and a tenant (renter). This document protects the rights of both parties and outlines their responsibilities.
        </p>

        <h2>Why is a Rent Agreement Important?</h2>
        <ul>
          <li><strong>Legal Protection:</strong> Provides legal recourse in case of disputes</li>
          <li><strong>Clear Terms:</strong> Documents all agreed-upon terms and conditions</li>
          <li><strong>Address Proof:</strong> Serves as a valid address proof for tenants</li>
          <li><strong>Tax Benefits:</strong> Required for claiming HRA exemption</li>
          <li><strong>Bank Accounts:</strong> Needed for opening bank accounts</li>
        </ul>

        <h2>Key Components of a Rent Agreement</h2>
        
        <h3>1. Basic Details</h3>
        <ul>
          <li>Names and addresses of landlord and tenant</li>
          <li>Complete property address and description</li>
          <li>Date of agreement</li>
          <li>Duration of the agreement (11 months is common)</li>
        </ul>

        <h3>2. Financial Terms</h3>
        <ul>
          <li>Monthly rent amount</li>
          <li>Security deposit (typically 2-3 months rent)</li>
          <li>Payment due date</li>
          <li>Late payment penalties</li>
          <li>Rent escalation clause (annual increase)</li>
        </ul>

        <h3>3. Rights and Responsibilities</h3>
        <ul>
          <li>Maintenance responsibilities</li>
          <li>Utility payments (electricity, water, gas)</li>
          <li>Subletting policies</li>
          <li>Pet policies</li>
          <li>Visitor policies</li>
        </ul>

        <h3>4. Termination Clauses</h3>
        <ul>
          <li>Notice period (usually 1-2 months)</li>
          <li>Conditions for early termination</li>
          <li>Security deposit refund terms</li>
        </ul>

        <h2>Stamp Duty Requirements</h2>
        <p>
          Stamp duty varies by state in India. Here are some common rates:
        </p>
        <ul>
          <li><strong>Maharashtra:</strong> 0.25% of total rent for the agreement period</li>
          <li><strong>Delhi:</strong> 2% of annual rent</li>
          <li><strong>Karnataka:</strong> 1% of total rent for the agreement period</li>
          <li><strong>Tamil Nadu:</strong> 1% of annual rent</li>
        </ul>

        <h2>Registration Requirements</h2>
        <p>
          Rent agreements for 12 months or more must be registered with the Sub-Registrar office. Agreements for 11 months or less don't require registration but should be notarized for authenticity.
        </p>

        <h2>How to Create Using DocuCreator Pro</h2>
        <ol>
          <li>Visit DocuCreator Pro and select "Rent Agreement"</li>
          <li>Fill in landlord and tenant details</li>
          <li>Enter property address and description</li>
          <li>Specify rent amount and security deposit</li>
          <li>Set the agreement duration and other terms</li>
          <li>Generate and download your PDF document</li>
        </ol>

        <div className="bg-legal-light p-6 rounded-lg my-8">
          <h3 className="text-legal-navy">Ready to Create Your Rent Agreement?</h3>
          <p>Use DocuCreator Pro to generate a professional rent agreement in minutes.</p>
          <Link to="/?template=property-rent" className="text-legal-accent font-medium hover:underline">
            Create Rent Agreement Now →
          </Link>
        </div>
      </div>
    ),
    faqItems: [
      {
        question: "What is the ideal duration for a rent agreement in India?",
        answer: "The most common duration is 11 months because agreements under 12 months don't require mandatory registration at the Sub-Registrar office, saving time and registration costs. However, they should be notarized for authenticity."
      },
      {
        question: "How much security deposit should be mentioned in a rent agreement?",
        answer: "Security deposit typically ranges from 2-3 months' rent in most Indian cities. In cities like Bangalore, it can go up to 10 months' rent. The exact amount should be clearly mentioned in the agreement along with refund terms."
      },
      {
        question: "Is stamp duty mandatory for rent agreements?",
        answer: "Yes, stamp duty is mandatory for all rent agreements in India. The rate varies by state - Maharashtra charges 0.25% of total rent, Delhi charges 2% of annual rent, and Karnataka charges 1% of total rent for the agreement period."
      },
      {
        question: "Can a rent agreement be used as address proof?",
        answer: "Yes, a registered or notarized rent agreement is accepted as valid address proof for Aadhaar updates, passport applications, bank account opening, and various government services. The agreement should be current and not expired."
      },
      {
        question: "What happens if rent agreement is not renewed after 11 months?",
        answer: "If both parties continue the arrangement without renewal, it typically converts to a month-to-month tenancy under the same terms. However, it's advisable to execute a fresh agreement to avoid legal complications and maintain clear documentation."
      }
    ]
  },
  'nda-agreement-template-guide': {
    title: 'NDA Agreement: What You Need to Know Before Signing',
    description: 'Understand Non-Disclosure Agreements (NDA), their types, key clauses, and when you should use them to protect your business confidential information.',
    keywords: 'NDA agreement, non-disclosure agreement template, confidentiality agreement India, NDA format, business NDA',
    date: '2024-12-25',
    readTime: '6 min read',
    category: 'Business Documents',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>What is an NDA (Non-Disclosure Agreement)?</h2>
        <p>
          A Non-Disclosure Agreement (NDA), also called a confidentiality agreement, is a legal contract that creates a confidential relationship between parties. It protects sensitive information from being disclosed to unauthorized individuals.
        </p>

        <h2>Types of NDAs</h2>
        
        <h3>1. Unilateral NDA</h3>
        <p>One party shares confidential information, and the other party agrees not to disclose it. Common in employer-employee relationships.</p>

        <h3>2. Bilateral (Mutual) NDA</h3>
        <p>Both parties share confidential information and agree to protect each other's secrets. Common in business partnerships and joint ventures.</p>

        <h3>3. Multilateral NDA</h3>
        <p>Involves three or more parties where at least one party will share information with others.</p>

        <h2>Key Clauses in an NDA</h2>
        <ul>
          <li><strong>Definition of Confidential Information:</strong> Clearly defines what is considered confidential</li>
          <li><strong>Obligations of Receiving Party:</strong> How the information must be protected</li>
          <li><strong>Exclusions:</strong> Information that is not covered by the NDA</li>
          <li><strong>Time Period:</strong> How long the confidentiality must be maintained</li>
          <li><strong>Return of Materials:</strong> Requirements to return or destroy confidential information</li>
          <li><strong>Consequences of Breach:</strong> Penalties for violating the agreement</li>
        </ul>

        <h2>When to Use an NDA</h2>
        <ul>
          <li>Before sharing business ideas with investors</li>
          <li>When hiring employees with access to sensitive information</li>
          <li>During business negotiations and partnerships</li>
          <li>When outsourcing work to contractors or agencies</li>
          <li>Before sharing proprietary technology or processes</li>
        </ul>

        <div className="bg-legal-light p-6 rounded-lg my-8">
          <h3 className="text-legal-navy">Create Your NDA Now</h3>
          <p>Protect your confidential information with a professionally drafted NDA.</p>
          <Link to="/?template=business-nda" className="text-legal-accent font-medium hover:underline">
            Create NDA Agreement →
          </Link>
        </div>
      </div>
    ),
    faqItems: [
      {
        question: "How long should an NDA last?",
        answer: "NDA duration typically ranges from 2-5 years for most business relationships. However, for trade secrets, NDAs can last indefinitely. The duration should be reasonable and proportionate to the sensitivity of the information being protected."
      },
      {
        question: "What happens if someone violates an NDA?",
        answer: "Violating an NDA can result in legal action including monetary damages, injunctions to stop further disclosure, and in some cases, criminal penalties. The disclosing party can sue for breach of contract and claim compensation for losses suffered."
      },
      {
        question: "Can an NDA be signed electronically in India?",
        answer: "Yes, NDAs can be signed electronically in India under the Information Technology Act, 2000. Electronic signatures using Aadhaar e-Sign or DSC (Digital Signature Certificate) are legally valid and enforceable."
      },
      {
        question: "What information cannot be covered under an NDA?",
        answer: "NDAs cannot cover information that is already public, independently developed by the receiving party, received from third parties legally, or required to be disclosed by law or court order. These are standard exclusions in most NDAs."
      },
      {
        question: "Do I need a lawyer to create an NDA?",
        answer: "While not mandatory, consulting a lawyer is advisable for complex business situations. For standard NDAs, you can use professionally drafted templates from DocuCreator Pro that include all essential clauses and are legally formatted."
      }
    ]
  },
  'gift-deed-vs-sale-deed-india': {
    title: 'Gift Deed vs Sale Deed: Which is Better for Property Transfer in India 2024',
    description: 'Comprehensive comparison of Gift Deed and Sale Deed for property transfer in India. Learn about tax implications, stamp duty, legal requirements, and which option is best for your situation.',
    keywords: 'gift deed vs sale deed, property transfer India, gift deed stamp duty, sale deed tax, property gift family, immovable property transfer, gift deed registration, property inheritance',
    date: '2024-12-30',
    readTime: '14 min read',
    category: 'Property Documents',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>Understanding Gift Deed and Sale Deed</h2>
        <p>
          When transferring immovable property in India, two of the most common methods are through a <strong>Gift Deed</strong> and a <strong>Sale Deed</strong>. While both result in property ownership transfer, they differ significantly in terms of consideration, tax implications, stamp duty, and legal requirements.
        </p>
        <p>
          Choosing the right method depends on your relationship with the recipient, tax planning goals, and the specific circumstances of the transfer.
        </p>

        <h2>What is a Gift Deed?</h2>
        <p>
          A <strong>Gift Deed</strong> is a legal document that transfers ownership of property from one person (donor) to another (donee) without any monetary consideration. It is governed by the <strong>Transfer of Property Act, 1882</strong> (Section 122).
        </p>
        <h3>Key Characteristics of Gift Deed:</h3>
        <ul>
          <li><strong>No Monetary Consideration:</strong> Property is transferred as a gift without payment</li>
          <li><strong>Voluntary Transfer:</strong> Made out of love, affection, or gratitude</li>
          <li><strong>Immediate Effect:</strong> Ownership transfers upon registration</li>
          <li><strong>Irrevocable:</strong> Generally cannot be revoked once registered (with exceptions)</li>
          <li><strong>Acceptance Required:</strong> Donee must accept the gift during the donor's lifetime</li>
        </ul>

        <h2>What is a Sale Deed?</h2>
        <p>
          A <strong>Sale Deed</strong> is a legal document that transfers property ownership from seller to buyer in exchange for a monetary consideration (price). It is the most common method of property transfer and provides the strongest legal protection.
        </p>
        <h3>Key Characteristics of Sale Deed:</h3>
        <ul>
          <li><strong>Monetary Consideration:</strong> Property is sold for a price</li>
          <li><strong>Market Transaction:</strong> Based on commercial value</li>
          <li><strong>Legal Evidence:</strong> Strongest proof of ownership</li>
          <li><strong>Tax Deductible:</strong> Interest on home loan is tax deductible</li>
          <li><strong>Clear Title:</strong> Seller guarantees clear and marketable title</li>
        </ul>

        <h2>Key Differences: Gift Deed vs Sale Deed</h2>
        <table className="w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr className="bg-legal-light">
              <th className="border border-gray-300 p-3 text-left">Aspect</th>
              <th className="border border-gray-300 p-3 text-left">Gift Deed</th>
              <th className="border border-gray-300 p-3 text-left">Sale Deed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3"><strong>Consideration</strong></td>
              <td className="border border-gray-300 p-3">No monetary payment (love & affection)</td>
              <td className="border border-gray-300 p-3">Full market price or agreed amount</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><strong>Relationship</strong></td>
              <td className="border border-gray-300 p-3">Usually between family members</td>
              <td className="border border-gray-300 p-3">Between any parties</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><strong>Stamp Duty</strong></td>
              <td className="border border-gray-300 p-3">Reduced rates for blood relatives (2-3%)</td>
              <td className="border border-gray-300 p-3">Full rates (5-7% depending on state)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><strong>Income Tax on Donor/Seller</strong></td>
              <td className="border border-gray-300 p-3">No capital gains tax for donor</td>
              <td className="border border-gray-300 p-3">Capital gains tax applicable</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><strong>Income Tax on Donee/Buyer</strong></td>
              <td className="border border-gray-300 p-3">Tax-free if from specified relatives</td>
              <td className="border border-gray-300 p-3">No income tax on purchase</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><strong>Revocability</strong></td>
              <td className="border border-gray-300 p-3">Generally irrevocable (exceptions apply)</td>
              <td className="border border-gray-300 p-3">Cannot be revoked</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3"><strong>Legal Disputes</strong></td>
              <td className="border border-gray-300 p-3">Higher chances of family disputes</td>
              <td className="border border-gray-300 p-3">Lower dispute risk</td>
            </tr>
          </tbody>
        </table>

        <h2>Tax Implications</h2>
        
        <h3>Gift Deed Tax Rules (Section 56 of Income Tax Act)</h3>
        <p>Gifts received from <strong>specified relatives</strong> are completely tax-free, regardless of value:</p>
        <ul>
          <li>Spouse</li>
          <li>Brother or Sister</li>
          <li>Brother or Sister of spouse</li>
          <li>Brother or Sister of either parent</li>
          <li>Any lineal ascendant or descendant (parents, grandparents, children, grandchildren)</li>
          <li>Lineal ascendant or descendant of spouse</li>
          <li>Spouse of any of the above</li>
        </ul>
        <p>
          <strong>Important:</strong> Gifts from non-relatives exceeding ₹50,000 in value are taxable as "Income from Other Sources" in the hands of the donee.
        </p>

        <h3>Sale Deed Tax Rules</h3>
        <ul>
          <li><strong>Seller:</strong> Must pay Capital Gains Tax on profit from sale</li>
          <li><strong>Short-term gains:</strong> Added to income if held less than 2 years (taxed at slab rate)</li>
          <li><strong>Long-term gains:</strong> Taxed at 20% with indexation benefit (if held 2+ years)</li>
          <li><strong>Buyer:</strong> Can claim TDS deduction if purchase exceeds ₹50 lakh</li>
        </ul>

        <h2>Stamp Duty Comparison by State</h2>
        <table className="w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr className="bg-legal-light">
              <th className="border border-gray-300 p-3 text-left">State</th>
              <th className="border border-gray-300 p-3 text-left">Gift Deed (Blood Relatives)</th>
              <th className="border border-gray-300 p-3 text-left">Gift Deed (Others)</th>
              <th className="border border-gray-300 p-3 text-left">Sale Deed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Maharashtra</td>
              <td className="border border-gray-300 p-3">3%</td>
              <td className="border border-gray-300 p-3">5%</td>
              <td className="border border-gray-300 p-3">5-6%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Delhi</td>
              <td className="border border-gray-300 p-3">2.5%</td>
              <td className="border border-gray-300 p-3">6%</td>
              <td className="border border-gray-300 p-3">4-6%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Karnataka</td>
              <td className="border border-gray-300 p-3">₹1,000-5,000 (nominal)</td>
              <td className="border border-gray-300 p-3">5.6%</td>
              <td className="border border-gray-300 p-3">5%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Tamil Nadu</td>
              <td className="border border-gray-300 p-3">1%</td>
              <td className="border border-gray-300 p-3">7%</td>
              <td className="border border-gray-300 p-3">7%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Uttar Pradesh</td>
              <td className="border border-gray-300 p-3">₹5,000 (fixed)</td>
              <td className="border border-gray-300 p-3">7%</td>
              <td className="border border-gray-300 p-3">6-7%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Rajasthan</td>
              <td className="border border-gray-300 p-3">2.5%</td>
              <td className="border border-gray-300 p-3">5%</td>
              <td className="border border-gray-300 p-3">5-6%</td>
            </tr>
          </tbody>
        </table>

        <h2>When to Choose Gift Deed</h2>
        <ul>
          <li>Transferring property to close family members (parents, children, siblings, spouse)</li>
          <li>When you want to save on stamp duty (concessional rates for relatives)</li>
          <li>Estate planning and succession management</li>
          <li>When donor has no capital gains tax liability to worry about</li>
          <li>Transferring ancestral or inherited property within family</li>
        </ul>

        <h2>When to Choose Sale Deed</h2>
        <ul>
          <li>Selling property to unrelated parties</li>
          <li>When buyer needs home loan (banks prefer sale deed)</li>
          <li>When you want clear legal protection and title warranty</li>
          <li>Commercial property transactions</li>
          <li>When seller wants to claim capital gains exemptions (Section 54, 54F)</li>
        </ul>

        <h2>Documents Required</h2>
        
        <h3>For Gift Deed:</h3>
        <ul>
          <li>Original property documents (title deed)</li>
          <li>Identity proof of donor and donee (Aadhaar, PAN)</li>
          <li>Proof of relationship (for concessional stamp duty)</li>
          <li>Property tax receipts</li>
          <li>Encumbrance Certificate</li>
          <li>Two witnesses with ID proof</li>
          <li>Photographs of all parties</li>
        </ul>

        <h3>For Sale Deed:</h3>
        <ul>
          <li>Original title documents</li>
          <li>Agreement to Sell</li>
          <li>Identity proof of buyer and seller</li>
          <li>Property tax receipts</li>
          <li>Encumbrance Certificate (13/30 years)</li>
          <li>NOC from society/bank</li>
          <li>Payment proof (bank statements)</li>
          <li>Two witnesses with ID proof</li>
        </ul>

        <h2>Registration Process</h2>
        <p>Both Gift Deed and Sale Deed must be registered at the Sub-Registrar office:</p>
        <ol>
          <li>Draft the deed with all required details</li>
          <li>Pay applicable stamp duty</li>
          <li>Book appointment at Sub-Registrar office</li>
          <li>All parties and witnesses to be present</li>
          <li>Biometric verification and signature</li>
          <li>Collect registered document (2-7 days)</li>
        </ol>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li><strong>Undervaluing property:</strong> Using values below circle rate can attract penalties</li>
          <li><strong>No acceptance clause:</strong> Gift deed must have donee's acceptance</li>
          <li><strong>Wrong relationship proof:</strong> Incorrect proof for concessional stamp duty</li>
          <li><strong>Incomplete documentation:</strong> Missing EC, tax receipts, or NOCs</li>
          <li><strong>Not considering future disputes:</strong> Other family members may challenge gift</li>
        </ul>

        <h2>FAQs</h2>
        
        <h3>Can a gift deed be cancelled or revoked?</h3>
        <p>
          Once registered, a gift deed is generally irrevocable. However, it can be revoked if: (a) both parties mutually agree, (b) it was made under fraud, coercion, or undue influence, (c) a condition for revocation was mentioned in the deed and that condition occurred.
        </p>

        <h3>Is gift deed better than will for property transfer?</h3>
        <p>
          A gift deed transfers property immediately during the donor's lifetime, while a will takes effect only after death. Gift deed is better if you want the transfer to happen now and avoid probate complications. Will is better if you want to retain ownership until death.
        </p>

        <h3>Can I gift property to my married daughter?</h3>
        <p>
          Yes, parents can gift property to married daughters. The gift is tax-free for the daughter. Concessional stamp duty rates apply as daughter is a blood relative. The gifted property becomes her self-acquired property, not joint property with spouse.
        </p>

        <h3>What happens if donor dies before gift deed registration?</h3>
        <p>
          If the donor dies before the gift deed is registered, the gift is void. Registration is mandatory for immovable property gifts. The property will then devolve according to succession laws or the donor's will.
        </p>

        <h3>Can NRIs execute gift deeds for property in India?</h3>
        <p>
          Yes, NRIs can execute gift deeds for property in India. They can either be present in person or give a registered Power of Attorney to someone in India. The recipient can be a resident Indian or another NRI (family member).
        </p>

        <h3>Is stamp duty refundable if gift deed is cancelled?</h3>
        <p>
          No, stamp duty paid is generally non-refundable even if the gift deed is later cancelled or revoked. You may need to pay fresh stamp duty for the re-transfer/cancellation deed.
        </p>

        <h3>Can I take a home loan against gifted property?</h3>
        <p>
          Yes, you can take a loan against gifted property after the gift deed is registered and property is mutated in your name. Banks will verify the gift deed and relationship between donor and donee.
        </p>

        <div className="bg-legal-light p-6 rounded-lg my-8">
          <h3 className="text-legal-navy">Create Your Property Transfer Documents</h3>
          <p>Generate professional gift deeds and sale deeds using DocuCreator Pro. Our templates are legally formatted and include all essential clauses.</p>
          <Link to="/" className="text-legal-accent font-medium hover:underline">
            Create Document Now →
          </Link>
        </div>

        <h2>Conclusion</h2>
        <p>
          Both Gift Deed and Sale Deed are valid methods for property transfer, but the choice depends on your specific situation. For family transfers where you want to save on taxes and stamp duty, a Gift Deed is usually better. For commercial transactions or when you need maximum legal protection, a Sale Deed is the preferred choice.
        </p>
        <p>
          Always consult a legal expert before making the decision, especially for high-value properties or complex family situations.
        </p>
      </div>
    ),
    faqItems: [
      {
        question: "Can a gift deed be cancelled or revoked?",
        answer: "Once registered, a gift deed is generally irrevocable. However, it can be revoked if: (a) both parties mutually agree, (b) it was made under fraud, coercion, or undue influence, (c) a condition for revocation was mentioned in the deed and that condition occurred."
      },
      {
        question: "Is gift deed better than will for property transfer?",
        answer: "A gift deed transfers property immediately during the donor's lifetime, while a will takes effect only after death. Gift deed is better if you want the transfer to happen now and avoid probate complications. Will is better if you want to retain ownership until death."
      },
      {
        question: "Can I gift property to my married daughter?",
        answer: "Yes, parents can gift property to married daughters. The gift is tax-free for the daughter. Concessional stamp duty rates apply as daughter is a blood relative. The gifted property becomes her self-acquired property, not joint property with spouse."
      },
      {
        question: "What happens if donor dies before gift deed registration?",
        answer: "If the donor dies before the gift deed is registered, the gift is void. Registration is mandatory for immovable property gifts. The property will then devolve according to succession laws or the donor's will."
      },
      {
        question: "Can NRIs execute gift deeds for property in India?",
        answer: "Yes, NRIs can execute gift deeds for property in India. They can either be present in person or give a registered Power of Attorney to someone in India. The recipient can be a resident Indian or another NRI (family member)."
      },
      {
        question: "Is stamp duty refundable if gift deed is cancelled?",
        answer: "No, stamp duty paid is generally non-refundable even if the gift deed is later cancelled or revoked. You may need to pay fresh stamp duty for the re-transfer/cancellation deed."
      },
      {
        question: "Can I take a home loan against gifted property?",
        answer: "Yes, you can take a loan against gifted property after the gift deed is registered and property is mutated in your name. Banks will verify the gift deed and relationship between donor and donee."
      }
    ]
  },
  'sale-deed-registration-process-india': {
    title: 'Sale Deed Registration Process in India: Complete Guide 2024',
    description: 'Complete guide to sale deed registration in India. Learn about documents required, stamp duty rates, registration fees, online process, and step-by-step procedure for property transfer.',
    keywords: 'sale deed registration, property registration India, stamp duty sale deed, property transfer documents, sub registrar office, conveyance deed, property registration process, sale deed format',
    date: '2024-12-30',
    readTime: '15 min read',
    category: 'Property Documents',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>What is a Sale Deed?</h2>
        <p>
          A <strong>Sale Deed</strong> (also known as Conveyance Deed or Transfer Deed) is the most important legal document in property transactions. It serves as the primary evidence of sale and transfer of property ownership from the seller to the buyer. Without a registered sale deed, the property transfer is not legally valid in India.
        </p>
        <p>
          Under the <strong>Registration Act, 1908</strong> and <strong>Transfer of Property Act, 1882</strong>, registration of sale deed is mandatory for all immovable property transactions exceeding ₹100 in value.
        </p>

        <h2>Why is Sale Deed Registration Important?</h2>
        <ul>
          <li><strong>Legal Ownership:</strong> Only a registered sale deed establishes legal ownership of property</li>
          <li><strong>Court Evidence:</strong> Registered documents are admissible as primary evidence in courts</li>
          <li><strong>Prevents Fraud:</strong> Registration process verifies identity and prevents property fraud</li>
          <li><strong>Loan Eligibility:</strong> Banks require registered sale deed for home loans</li>
          <li><strong>Property Mutation:</strong> Required for transferring property records in municipal records</li>
          <li><strong>Future Sale:</strong> Essential for selling the property in future</li>
        </ul>

        <h2>Documents Required for Sale Deed Registration</h2>
        
        <h3>From Seller (Vendor):</h3>
        <ul>
          <li>Original previous sale deed / title documents</li>
          <li>Property tax receipts (last 3 years)</li>
          <li>Encumbrance Certificate (EC) - last 13/30 years</li>
          <li>Aadhaar Card and PAN Card</li>
          <li>Passport-size photographs (4 copies)</li>
          <li>Building approval plan (for constructed property)</li>
          <li>Occupancy Certificate / Completion Certificate</li>
          <li>Society NOC (for flats/apartments)</li>
          <li>Power of Attorney (if applicable)</li>
        </ul>

        <h3>From Buyer (Vendee):</h3>
        <ul>
          <li>Aadhaar Card and PAN Card</li>
          <li>Passport-size photographs (4 copies)</li>
          <li>Address proof</li>
          <li>Bank account details (for payment trail)</li>
          <li>Home loan sanction letter (if financed)</li>
        </ul>

        <h3>Property Documents:</h3>
        <ul>
          <li>Property survey documents and layout plan</li>
          <li>Khata Certificate / Patta</li>
          <li>Land conversion certificate (for agricultural land)</li>
          <li>RERA registration (for new projects)</li>
          <li>Builder-Buyer Agreement (for under-construction)</li>
        </ul>

        <h2>Step-by-Step Sale Deed Registration Process</h2>
        
        <h3>Step 1: Verify Property Title</h3>
        <p>
          Before proceeding, conduct thorough due diligence:
        </p>
        <ul>
          <li>Verify seller's ownership through title documents</li>
          <li>Obtain Encumbrance Certificate (EC) to check for loans/mortgages</li>
          <li>Verify property tax payment status</li>
          <li>Check for any litigation on the property</li>
          <li>Verify RERA registration for new projects</li>
        </ul>

        <h3>Step 2: Draft the Sale Deed</h3>
        <p>
          The sale deed should include:
        </p>
        <ul>
          <li>Complete details of buyer and seller</li>
          <li>Property description with boundaries and measurements</li>
          <li>Sale consideration (price) and payment details</li>
          <li>Mode of payment (cash, cheque, bank transfer)</li>
          <li>Handover possession date</li>
          <li>Indemnity clause</li>
          <li>Declaration of clear title</li>
        </ul>

        <h3>Step 3: Pay Stamp Duty</h3>
        <p>
          Stamp duty must be paid before registration. You can pay through:
        </p>
        <ul>
          <li><strong>E-Stamping:</strong> Online through SHCIL portal</li>
          <li><strong>Franking:</strong> Through authorized banks</li>
          <li><strong>Stamp Paper:</strong> Purchase from authorized vendors</li>
        </ul>

        <h3>Step 4: Book Appointment at Sub-Registrar Office</h3>
        <p>
          Schedule an appointment through state's online portal:
        </p>
        <ul>
          <li><strong>Maharashtra:</strong> igrmaharashtra.gov.in</li>
          <li><strong>Delhi:</strong> doris.delhigovt.nic.in</li>
          <li><strong>Karnataka:</strong> kaverionline.karnataka.gov.in</li>
          <li><strong>Tamil Nadu:</strong> tnreginet.gov.in</li>
          <li><strong>Uttar Pradesh:</strong> igrsup.gov.in</li>
          <li><strong>Gujarat:</strong> garvi.gujarat.gov.in</li>
          <li><strong>Rajasthan:</strong> epanjiyan.raj.nic.in</li>
        </ul>

        <h3>Step 5: Visit Sub-Registrar Office</h3>
        <p>
          On the appointment date:
        </p>
        <ul>
          <li>Both buyer and seller must be present</li>
          <li>Bring two witnesses with Aadhaar</li>
          <li>Carry all original documents</li>
          <li>Biometric verification will be done</li>
          <li>Pay registration fee</li>
        </ul>

        <h3>Step 6: Collect Registered Document</h3>
        <p>
          After verification, the Sub-Registrar will:
        </p>
        <ul>
          <li>Enter details in registration records</li>
          <li>Provide unique document registration number</li>
          <li>Return registered sale deed within 2-7 days</li>
        </ul>

        <h2>Stamp Duty Rates by State (2024)</h2>
        <table className="w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr className="bg-legal-light">
              <th className="border border-gray-300 p-3 text-left">State</th>
              <th className="border border-gray-300 p-3 text-left">Male Buyer</th>
              <th className="border border-gray-300 p-3 text-left">Female Buyer</th>
              <th className="border border-gray-300 p-3 text-left">Joint (M+F)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Maharashtra</td>
              <td className="border border-gray-300 p-3">6%</td>
              <td className="border border-gray-300 p-3">5%</td>
              <td className="border border-gray-300 p-3">5%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Delhi</td>
              <td className="border border-gray-300 p-3">6%</td>
              <td className="border border-gray-300 p-3">4%</td>
              <td className="border border-gray-300 p-3">5%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Karnataka</td>
              <td className="border border-gray-300 p-3">5%</td>
              <td className="border border-gray-300 p-3">5%</td>
              <td className="border border-gray-300 p-3">5%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Tamil Nadu</td>
              <td className="border border-gray-300 p-3">7%</td>
              <td className="border border-gray-300 p-3">7%</td>
              <td className="border border-gray-300 p-3">7%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Uttar Pradesh</td>
              <td className="border border-gray-300 p-3">7%</td>
              <td className="border border-gray-300 p-3">6%</td>
              <td className="border border-gray-300 p-3">6.5%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Gujarat</td>
              <td className="border border-gray-300 p-3">4.9%</td>
              <td className="border border-gray-300 p-3">4.9%</td>
              <td className="border border-gray-300 p-3">4.9%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Rajasthan</td>
              <td className="border border-gray-300 p-3">6%</td>
              <td className="border border-gray-300 p-3">5%</td>
              <td className="border border-gray-300 p-3">5.5%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">West Bengal</td>
              <td className="border border-gray-300 p-3">6-7%</td>
              <td className="border border-gray-300 p-3">6-7%</td>
              <td className="border border-gray-300 p-3">6-7%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-legal-gray">
          *Note: Additional 1% registration fee applies in most states. Municipal areas may have higher rates.
        </p>

        <h2>Registration Fees</h2>
        <p>
          Registration fee is typically <strong>1% of property value</strong> or a fixed amount, whichever is higher:
        </p>
        <ul>
          <li><strong>Maharashtra:</strong> 1% (max ₹30,000)</li>
          <li><strong>Delhi:</strong> 1%</li>
          <li><strong>Karnataka:</strong> 1%</li>
          <li><strong>Tamil Nadu:</strong> 1%</li>
          <li><strong>UP:</strong> 1%</li>
        </ul>

        <h2>Online Sale Deed Registration</h2>
        <p>
          Many states now offer partial or full online registration:
        </p>
        
        <h3>Maharashtra (igrmaharashtra.gov.in)</h3>
        <ul>
          <li>Upload documents online</li>
          <li>Pay stamp duty and registration fee online</li>
          <li>Book appointment slot</li>
          <li>Physical visit required for biometrics</li>
        </ul>

        <h3>Karnataka (Kaveri Online 2.0)</h3>
        <ul>
          <li>Doorstep registration service available</li>
          <li>Document scanning at home</li>
          <li>Biometric capture at doorstep</li>
          <li>Premium fee for doorstep service</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li><strong>Incorrect valuation:</strong> Undervaluing property can lead to penalties</li>
          <li><strong>Missing EC:</strong> Not obtaining Encumbrance Certificate</li>
          <li><strong>Ignoring pending dues:</strong> Check for unpaid property tax, maintenance</li>
          <li><strong>Wrong stamp duty:</strong> Calculating on agreement value instead of circle rate</li>
          <li><strong>Missing witnesses:</strong> Witnesses must be present with valid ID</li>
          <li><strong>Delayed registration:</strong> Register within 4 months of execution</li>
          <li><strong>Power of Attorney misuse:</strong> Ensure POA is valid and registered</li>
        </ul>

        <h2>After Registration: Next Steps</h2>
        <ol>
          <li><strong>Collect Registered Deed:</strong> Usually within 2-7 days</li>
          <li><strong>Property Mutation:</strong> Apply at municipal corporation</li>
          <li><strong>Update Khata:</strong> Transfer Khata to buyer's name</li>
          <li><strong>Utility Transfer:</strong> Change electricity, water connections</li>
          <li><strong>Society Transfer:</strong> Update society records (for flats)</li>
          <li><strong>Update Bank:</strong> Inform bank if property was mortgaged</li>
        </ol>

        <h2>FAQs</h2>
        
        <h3>Q: What is the time limit for sale deed registration?</h3>
        <p>
          <strong>A:</strong> A sale deed must be registered within 4 months from the date of execution. After this period, you can still register with late fees (penalty) typically 2% per month up to a maximum of 4 times the original registration fee.
        </p>

        <h3>Q: Can I register a sale deed without paying full stamp duty?</h3>
        <p>
          <strong>A:</strong> No, stamp duty must be paid in full before registration. The Sub-Registrar will verify stamp duty payment. Underpayment can result in penalties up to 10 times the deficit amount.
        </p>

        <h3>Q: What is the difference between Agreement to Sell and Sale Deed?</h3>
        <p>
          <strong>A:</strong> An Agreement to Sell is a promise to transfer property in the future upon certain conditions being met. A Sale Deed is the final document that actually transfers ownership. Only a Sale Deed creates legal ownership rights.
        </p>

        <h3>Q: Is physical presence mandatory for registration?</h3>
        <p>
          <strong>A:</strong> Yes, both buyer and seller must be physically present for biometric verification. If unable to attend, a registered Power of Attorney holder can represent them.
        </p>

        <h3>Q: How is stamp duty calculated - on agreement value or circle rate?</h3>
        <p>
          <strong>A:</strong> Stamp duty is calculated on whichever is higher - the actual sale consideration (agreement value) or the government-specified circle rate/guideline value for that area.
        </p>

        <h3>Q: Can NRIs register property in India?</h3>
        <p>
          <strong>A:</strong> Yes, NRIs can buy and register property in India. They can either be present in person or authorize someone through a registered Power of Attorney. Payment must be through NRE/NRO accounts.
        </p>

        <h3>Q: What happens if the seller dies before registration?</h3>
        <p>
          <strong>A:</strong> If the seller dies after executing the sale deed but before registration, the legal heirs can complete the registration. They need to produce death certificate, legal heir certificate, and may need succession certificate.
        </p>

        <div className="bg-legal-light p-6 rounded-lg my-8">
          <h3 className="text-legal-navy">Create Your Sale Deed Now</h3>
          <p>Generate a professional sale deed document using DocuCreator Pro. Our templates are legally formatted and include all essential clauses.</p>
          <Link to="/?template=property-sale" className="text-legal-accent font-medium hover:underline">
            Create Sale Deed →
          </Link>
        </div>

        <h2>Conclusion</h2>
        <p>
          Sale deed registration is a crucial step in any property transaction in India. While the process may seem complex, proper preparation and understanding of requirements can make it smooth. Always verify property documents thoroughly, pay correct stamp duty, and complete registration within the stipulated time to avoid legal complications.
        </p>
        <p>
          For hassle-free document creation, use DocuCreator Pro to generate professionally formatted sale deeds and other property documents instantly.
        </p>
      </div>
    ),
    faqItems: [
      {
        question: "What is the time limit for sale deed registration?",
        answer: "A sale deed must be registered within 4 months from the date of execution. After this period, you can still register with late fees (penalty) typically 2% per month up to a maximum of 4 times the original registration fee."
      },
      {
        question: "Can I register a sale deed without paying full stamp duty?",
        answer: "No, stamp duty must be paid in full before registration. The Sub-Registrar will verify stamp duty payment. Underpayment can result in penalties up to 10 times the deficit amount."
      },
      {
        question: "What is the difference between Agreement to Sell and Sale Deed?",
        answer: "An Agreement to Sell is a promise to transfer property in the future upon certain conditions being met. A Sale Deed is the final document that actually transfers ownership. Only a Sale Deed creates legal ownership rights."
      },
      {
        question: "Is physical presence mandatory for registration?",
        answer: "Yes, both buyer and seller must be physically present for biometric verification. If unable to attend, a registered Power of Attorney holder can represent them."
      },
      {
        question: "How is stamp duty calculated - on agreement value or circle rate?",
        answer: "Stamp duty is calculated on whichever is higher - the actual sale consideration (agreement value) or the government-specified circle rate/guideline value for that area."
      },
      {
        question: "Can NRIs register property in India?",
        answer: "Yes, NRIs can buy and register property in India. They can either be present in person or authorize someone through a registered Power of Attorney. Payment must be through NRE/NRO accounts."
      },
      {
        question: "What happens if the seller dies before registration?",
        answer: "If the seller dies after executing the sale deed but before registration, the legal heirs can complete the registration. They need to produce death certificate, legal heir certificate, and may need succession certificate."
      }
    ]
  },
  'how-to-register-rent-agreement-online-india': {
    title: 'How to Register Rent Agreement Online in India: Complete Step-by-Step Guide 2024',
    description: 'Learn how to register your rent agreement online in India. Complete guide covering e-registration process, documents required, stamp duty, fees, and state-wise procedures for Maharashtra, Delhi, Karnataka, and more.',
    keywords: 'register rent agreement online, e-registration rent agreement, online rent agreement registration India, stamp duty rent agreement, leave and license registration, rental agreement registration process',
    date: '2024-12-30',
    readTime: '12 min read',
    category: 'Legal Guides',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>Why Register Your Rent Agreement?</h2>
        <p>
          Registering a rent agreement provides legal validity and protection to both landlords and tenants. While agreements under 11 months don't require mandatory registration, registering them offers several benefits:
        </p>
        <ul>
          <li><strong>Legal Evidence:</strong> Registered documents are admissible as primary evidence in court</li>
          <li><strong>Dispute Resolution:</strong> Easier to resolve conflicts with registered agreements</li>
          <li><strong>Prevents Fraud:</strong> Registration verifies authenticity of signatures and identities</li>
          <li><strong>Address Proof:</strong> Serves as valid government-recognized address proof</li>
          <li><strong>Loan Applications:</strong> Banks prefer registered agreements for home loans</li>
        </ul>

        <h2>When is Registration Mandatory?</h2>
        <p>
          According to the Registration Act, 1908:
        </p>
        <ul>
          <li><strong>Mandatory:</strong> Rent agreements for 12 months or more MUST be registered</li>
          <li><strong>Optional:</strong> Agreements less than 12 months (typically 11 months) are not mandatory but recommended</li>
          <li><strong>Leave and License:</strong> In Maharashtra, Leave and License agreements must be registered regardless of duration</li>
        </ul>

        <h2>Documents Required for Registration</h2>
        
        <h3>From Landlord:</h3>
        <ul>
          <li>Original property ownership documents (sale deed, title deed)</li>
          <li>Property tax receipts (latest)</li>
          <li>Aadhaar Card and PAN Card</li>
          <li>Passport-size photographs (2 copies)</li>
          <li>Society NOC (if applicable)</li>
        </ul>

        <h3>From Tenant:</h3>
        <ul>
          <li>Aadhaar Card and PAN Card</li>
          <li>Passport-size photographs (2 copies)</li>
          <li>Employment proof or business documents</li>
          <li>Previous address proof</li>
        </ul>

        <h3>Witnesses:</h3>
        <ul>
          <li>Two witnesses with Aadhaar and photographs</li>
          <li>Witnesses should not be family members of parties</li>
        </ul>

        <h2>Online Registration Process</h2>
        
        <h3>Step 1: Create the Rent Agreement</h3>
        <p>
          First, create your rent agreement with all necessary details. You can use DocuCreator Pro to generate a professional rent agreement instantly.
        </p>

        <h3>Step 2: Pay Stamp Duty Online</h3>
        <p>
          Calculate and pay stamp duty through the state's e-stamping portal. Stamp duty rates vary by state:
        </p>
        <ul>
          <li><strong>Maharashtra:</strong> 0.25% of total rent + deposit (min ₹100)</li>
          <li><strong>Delhi:</strong> 2% of average annual rent</li>
          <li><strong>Karnataka:</strong> 1% of total rent for lease period</li>
          <li><strong>Tamil Nadu:</strong> 1% of annual rent</li>
          <li><strong>Uttar Pradesh:</strong> 2% of annual rent</li>
          <li><strong>Gujarat:</strong> 1% of total rent</li>
        </ul>

        <h3>Step 3: Schedule Appointment</h3>
        <p>
          Book an appointment at the Sub-Registrar office through the state's online portal:
        </p>
        <ul>
          <li><strong>Maharashtra:</strong> igrmaharashtra.gov.in</li>
          <li><strong>Delhi:</strong> doris.delhigovt.nic.in</li>
          <li><strong>Karnataka:</strong> kaverionline.karnataka.gov.in</li>
          <li><strong>Tamil Nadu:</strong> tnreginet.gov.in</li>
        </ul>

        <h3>Step 4: Visit Sub-Registrar Office</h3>
        <p>
          On the appointment date, both parties and witnesses must visit the Sub-Registrar office with:
        </p>
        <ul>
          <li>Original and photocopies of all documents</li>
          <li>E-stamp paper with paid stamp duty</li>
          <li>Signed rent agreement (2 copies)</li>
          <li>Appointment confirmation</li>
        </ul>

        <h3>Step 5: Verification and Registration</h3>
        <p>
          The Sub-Registrar will verify documents, take biometrics, and complete registration. You'll receive the registered document within 2-3 days.
        </p>

        <h2>Registration Fees by State</h2>
        <table className="w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr className="bg-legal-light">
              <th className="border border-gray-300 p-3 text-left">State</th>
              <th className="border border-gray-300 p-3 text-left">Registration Fee</th>
              <th className="border border-gray-300 p-3 text-left">Processing Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">Maharashtra</td>
              <td className="border border-gray-300 p-3">₹1,000</td>
              <td className="border border-gray-300 p-3">1-2 days</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Delhi</td>
              <td className="border border-gray-300 p-3">₹1,100</td>
              <td className="border border-gray-300 p-3">2-3 days</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Karnataka</td>
              <td className="border border-gray-300 p-3">1% of rent (min ₹500)</td>
              <td className="border border-gray-300 p-3">1-2 days</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Tamil Nadu</td>
              <td className="border border-gray-300 p-3">1% of rent</td>
              <td className="border border-gray-300 p-3">2-4 days</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">Uttar Pradesh</td>
              <td className="border border-gray-300 p-3">₹1,000 + 2% pasting</td>
              <td className="border border-gray-300 p-3">3-5 days</td>
            </tr>
          </tbody>
        </table>

        <h2>E-Registration (Fully Online) States</h2>
        <p>
          Some states now offer complete online registration without physical visits:
        </p>
        <ul>
          <li><strong>Maharashtra:</strong> Leave and License agreements can be registered 100% online via IGR Maharashtra portal</li>
          <li><strong>Karnataka:</strong> Kaveri Online 2.0 offers doorstep registration service</li>
          <li><strong>Delhi:</strong> Pilot program for online registration in select areas</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Not mentioning all terms in the agreement</li>
          <li>Incorrect stamp duty calculation</li>
          <li>Missing witness signatures</li>
          <li>Not carrying original documents to registration</li>
          <li>Delaying registration beyond 4 months of execution</li>
          <li>Not getting acknowledgment copy</li>
        </ul>

        <h2>Penalties for Non-Registration</h2>
        <p>
          If you fail to register a mandatory rent agreement:
        </p>
        <ul>
          <li>Document cannot be used as evidence in court</li>
          <li>Penalty of 2-10 times the registration fee</li>
          <li>Additional stamp duty with interest</li>
          <li>Agreement may be considered void</li>
        </ul>

        <h2>FAQs</h2>
        
        <h3>Can I register a rent agreement without the owner being present?</h3>
        <p>
          No, both landlord and tenant must be present during registration. However, in case of inability, a Power of Attorney holder can appear on behalf.
        </p>

        <h3>How long does online registration take?</h3>
        <p>
          The entire process takes 2-5 working days depending on the state and document verification.
        </p>

        <h3>Can I register an old rent agreement?</h3>
        <p>
          Yes, but you may need to pay additional stamp duty and penalty for late registration (after 4 months from execution).
        </p>

        <div className="bg-legal-light p-6 rounded-lg my-8">
          <h3 className="text-legal-navy">Create Your Rent Agreement Now</h3>
          <p>First, create a professional rent agreement using DocuCreator Pro. Then follow the steps above to get it registered.</p>
          <Link to="/?template=property-rent" className="text-legal-accent font-medium hover:underline">
            Create Rent Agreement →
          </Link>
        </div>
      </div>
    ),
    faqItems: [
      {
        question: "Can I register a rent agreement without the owner being present?",
        answer: "No, both landlord and tenant must be present during registration. However, in case of inability, a Power of Attorney holder can appear on behalf."
      },
      {
        question: "How long does online registration take?",
        answer: "The entire process takes 2-5 working days depending on the state and document verification."
      },
      {
        question: "Can I register an old rent agreement?",
        answer: "Yes, but you may need to pay additional stamp duty and penalty for late registration (after 4 months from execution)."
      },
      {
        question: "Is registration mandatory for 11-month rent agreements?",
        answer: "No, registration is not mandatory for agreements less than 12 months. However, in Maharashtra, Leave and License agreements must be registered regardless of duration."
      },
      {
        question: "What is the stamp duty for rent agreement registration?",
        answer: "Stamp duty varies by state. Maharashtra charges 0.25% of total rent + deposit, Delhi charges 2% of annual rent, Karnataka charges 1% of total rent for the lease period."
      }
    ]
  }
};

// Default content for posts without detailed content
const defaultContent = (title: string) => (
  <div className="prose prose-lg max-w-none">
    <p>This article is coming soon. We're working on creating comprehensive content for "{title}".</p>
    <p>In the meantime, you can use DocuCreator Pro to create your legal documents instantly.</p>
    <div className="bg-legal-light p-6 rounded-lg my-8">
      <h3 className="text-legal-navy">Create Documents Now</h3>
      <p>Use DocuCreator Pro to generate professional legal documents in minutes.</p>
      <Link to="/" className="text-legal-accent font-medium hover:underline">
        Start Creating →
      </Link>
    </div>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <HeaderAdSenseCompliant />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-legal-navy mb-4">Article Not Found</h1>
            <p className="text-legal-gray mb-6">The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-legal-accent hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <FooterAdSenseCompliant />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title={`${post.title} | DocuCreator Pro`}
        description={post.description}
        keywords={post.keywords}
        canonicalUrl={`/blog/${slug}`}
        pageType="article"
        articleData={{
          publishedTime: post.date,
          modifiedTime: post.date,
          section: post.category
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` }
        ]}
        faqItems={post.faqItems}
      />
      
      <HeaderAdSenseCompliant />
      
      <main className="flex-grow bg-white">
        <article className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-legal-gray hover:text-legal-navy mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-legal-accent/10 text-legal-accent rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-legal-navy mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-legal-gray">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose-headings:text-legal-navy prose-a:text-legal-accent prose-strong:text-legal-navy">
            {post.content || defaultContent(post.title)}
          </div>

          {/* Author Section */}
          <div className="mt-12 p-6 bg-legal-light rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-legal-navy rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-legal-navy">DocuCreator Pro Team</h3>
                <p className="text-sm text-legal-gray">
                  Expert legal document guides and resources to help you create professional documents.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles CTA */}
          <div className="mt-8 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-legal-accent hover:text-legal-navy font-medium"
            >
              View More Articles
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </article>
        
        <PlayStoreCompliantDisclaimer />
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default BlogPost;
