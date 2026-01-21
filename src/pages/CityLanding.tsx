import React from 'react';
import { useParams, Link } from 'react-router-dom';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle2, MapPin, IndianRupee, FileCheck, Users, Building, Clock } from 'lucide-react';

// City-specific data for Local SEO
const cityData: Record<string, {
  name: string;
  nameHindi: string;
  stampDutyRate: string;
  registrationFee: string;
  subRegistrarOffices: string[];
  averageRent: string;
  popularAreas: string[];
  localTips: string[];
  stampDutyCalculation: string;
  eRegistrationPortal?: string;
}> = {
  'mumbai': {
    name: 'Mumbai',
    nameHindi: 'मुंबई',
    stampDutyRate: '0.25%',
    registrationFee: '1% (max ₹30,000)',
    subRegistrarOffices: ['Andheri', 'Bandra', 'Borivali', 'Thane', 'Dadar', 'Malad', 'Powai'],
    averageRent: '₹25,000 - ₹80,000',
    popularAreas: ['Andheri West', 'Bandra East', 'Powai', 'Malad West', 'Thane West', 'Goregaon'],
    localTips: [
      'Leave and License format use karo - Mumbai mein ye standard hai',
      'Society NOC zaruri hai agreement banane se pehle',
      'Police verification mandatory hai tenant ke liye',
      '11 months agreement pe registration optional but recommended'
    ],
    stampDutyCalculation: 'Total Rent + Deposit ka 0.25%',
    eRegistrationPortal: 'https://igrmaharashtra.gov.in/'
  },
  'delhi': {
    name: 'Delhi',
    nameHindi: 'दिल्ली',
    stampDutyRate: '2%',
    registrationFee: '1%',
    subRegistrarOffices: ['Saket', 'Rohini', 'Dwarka', 'Laxmi Nagar', 'Janakpuri', 'Pitampura'],
    averageRent: '₹15,000 - ₹50,000',
    popularAreas: ['Dwarka', 'Rohini', 'Saket', 'Lajpat Nagar', 'Mayur Vihar', 'Vasant Kunj'],
    localTips: [
      'Delhi mein 2% stamp duty lagti hai - other states se zyada',
      'Police verification form online submit kar sakte ho',
      'DDA flat mein NOC DDA office se lena padta hai',
      'Metro connectivity wale areas mein rent zyada hai'
    ],
    stampDutyCalculation: 'Annual Rent Value ka 2%',
    eRegistrationPortal: 'https://doris.delhi.gov.in/'
  },
  'bangalore': {
    name: 'Bangalore',
    nameHindi: 'बेंगलुरु',
    stampDutyRate: '1%',
    registrationFee: '1%',
    subRegistrarOffices: ['Koramangala', 'Whitefield', 'Electronic City', 'HSR Layout', 'Marathahalli', 'Jayanagar'],
    averageRent: '₹18,000 - ₹45,000',
    popularAreas: ['Koramangala', 'HSR Layout', 'Whitefield', 'Indiranagar', 'Electronic City', 'Marathahalli'],
    localTips: [
      'Karnataka mein 10 months security deposit standard hai',
      'BBMP tax receipt landlord se zarur lo',
      'IT hub areas mein furnished flats common hain',
      'Kaveri Online portal se e-stamp le sakte ho'
    ],
    stampDutyCalculation: 'Total Rent for Agreement Period ka 1%',
    eRegistrationPortal: 'https://kaveri.karnataka.gov.in/'
  },
  'hyderabad': {
    name: 'Hyderabad',
    nameHindi: 'हैदराबाद',
    stampDutyRate: '0.5%',
    registrationFee: '0.5%',
    subRegistrarOffices: ['Madhapur', 'Gachibowli', 'Kondapur', 'Kukatpally', 'Secunderabad', 'Banjara Hills'],
    averageRent: '₹12,000 - ₹35,000',
    popularAreas: ['Madhapur', 'Gachibowli', 'Kondapur', 'Kukatpally', 'Hitech City', 'Jubilee Hills'],
    localTips: [
      'Telangana mein stamp duty bahut low hai - sirf 0.5%',
      'IT corridor areas mein corporate leasing common hai',
      'GHMC property tax receipt verify karo',
      'Mee Seva centers se bhi e-stamp mil jata hai'
    ],
    stampDutyCalculation: 'Total Agreement Value ka 0.5%',
    eRegistrationPortal: 'https://registration.telangana.gov.in/'
  },
  'chennai': {
    name: 'Chennai',
    nameHindi: 'चेन्नई',
    stampDutyRate: '1%',
    registrationFee: '1%',
    subRegistrarOffices: ['Anna Nagar', 'T Nagar', 'Velachery', 'OMR', 'Adyar', 'Guindy'],
    averageRent: '₹15,000 - ₹40,000',
    popularAreas: ['Anna Nagar', 'Velachery', 'OMR', 'Adyar', 'Besant Nagar', 'Porur'],
    localTips: [
      'Tamil Nadu mein rental agreement Tamil mein bhi acceptable hai',
      'CMDA approved layout verify karo purchase/rent ke liye',
      'OMR IT corridor mein furnished apartments common',
      'TNEB electricity bill transfer karwana important hai'
    ],
    stampDutyCalculation: 'Annual Rent Value ka 1%',
    eRegistrationPortal: 'https://tnreginet.gov.in/'
  },
  'pune': {
    name: 'Pune',
    nameHindi: 'पुणे',
    stampDutyRate: '0.25%',
    registrationFee: '1% (max ₹30,000)',
    subRegistrarOffices: ['Shivaji Nagar', 'Kothrud', 'Hinjewadi', 'Wakad', 'Baner', 'Viman Nagar'],
    averageRent: '₹15,000 - ₹40,000',
    popularAreas: ['Hinjewadi', 'Kothrud', 'Baner', 'Wakad', 'Viman Nagar', 'Hadapsar'],
    localTips: [
      'Maharashtra rules apply - Leave and License format use karo',
      'IT Park areas mein company lease agreements common',
      'PMC/PCMC area check karo - rules slightly different',
      'Society maintenance clearly mention karo agreement mein'
    ],
    stampDutyCalculation: 'Total Rent + Deposit ka 0.25%',
    eRegistrationPortal: 'https://igrmaharashtra.gov.in/'
  },
  'noida': {
    name: 'Noida',
    nameHindi: 'नोएडा',
    stampDutyRate: '4%',
    registrationFee: '2%',
    subRegistrarOffices: ['Sector 62', 'Sector 18', 'Greater Noida', 'Sector 137', 'Sector 76'],
    averageRent: '₹12,000 - ₹35,000',
    popularAreas: ['Sector 62', 'Sector 137', 'Sector 75', 'Greater Noida West', 'Sector 128', 'Sector 50'],
    localTips: [
      'UP mein stamp duty sabse zyada hai - 4%',
      'Noida Authority apartment mein allotment letter verify karo',
      'Greater Noida West (Noida Extension) mein new constructions hain',
      'Metro connectivity areas mein demand zyada hai'
    ],
    stampDutyCalculation: 'Annual Rent Value ka 4%',
    eRegistrationPortal: 'https://igrsup.gov.in/'
  },
  'gurgaon': {
    name: 'Gurgaon',
    nameHindi: 'गुरुग्राम',
    stampDutyRate: '3%',
    registrationFee: '1.5%',
    subRegistrarOffices: ['Sector 44', 'Sector 14', 'Manesar', 'Sohna Road', 'Golf Course Road'],
    averageRent: '₹20,000 - ₹60,000',
    popularAreas: ['DLF Phase 1-5', 'Sector 56', 'Golf Course Road', 'Sohna Road', 'MG Road', 'Cyber City'],
    localTips: [
      'Haryana mein stamp duty 3% hai rental agreements ke liye',
      'DLF, Unitech societies mein premium rent common hai',
      'Corporate housing ke liye 11+11 months agreement standard',
      'Gated communities mein society rules agreement mein mention karo'
    ],
    stampDutyCalculation: 'Annual Rent Value ka 3%',
    eRegistrationPortal: 'https://jamabandi.nic.in/'
  }
};

const CityLanding = () => {
  const { city } = useParams<{ city: string }>();
  const cityInfo = city ? cityData[city.toLowerCase()] : null;

  if (!cityInfo) {
    return (
      <div className="flex flex-col min-h-screen">
        <HeaderAdSenseCompliant />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-legal-navy mb-4">City Not Found</h1>
            <p className="text-legal-gray mb-6">Sorry, we don't have information for this city yet.</p>
            <Link to="/" className="text-legal-accent hover:underline">Go to Homepage</Link>
          </div>
        </main>
        <FooterAdSenseCompliant />
      </div>
    );
  }

  const faqItems = [
    {
      question: `${cityInfo.name} mein rent agreement kaise banaye?`,
      answer: `${cityInfo.name} mein rent agreement banane ke liye DocuCreator Pro use karo. Landlord-tenant details fill karo, rent amount aur deposit mention karo, aur instant PDF download karo. ${cityInfo.stampDutyRate} stamp duty lagti hai.`
    },
    {
      question: `${cityInfo.name} mein rent agreement ki stamp duty kitni hai?`,
      answer: `${cityInfo.name} mein rent agreement ki stamp duty ${cityInfo.stampDutyRate} hai. Registration fee ${cityInfo.registrationFee} additional hai. Calculation: ${cityInfo.stampDutyCalculation}.`
    },
    {
      question: `${cityInfo.name} mein rent agreement registration kahan hoti hai?`,
      answer: `${cityInfo.name} mein rent agreement registration Sub-Registrar office mein hoti hai. Main offices: ${cityInfo.subRegistrarOffices.slice(0, 4).join(', ')}. Online registration bhi available hai.`
    },
    {
      question: `${cityInfo.name} mein average rent kitna hai?`,
      answer: `${cityInfo.name} mein average rent ${cityInfo.averageRent} per month hai depending on area aur flat size. Popular areas: ${cityInfo.popularAreas.slice(0, 4).join(', ')}.`
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOMetadata 
        title={`Rent Agreement ${cityInfo.name} | Free Online Rent Agreement Generator ${cityInfo.name} - DocuCreator Pro`}
        description={`Create rent agreement online for ${cityInfo.name}. Free rental agreement format with ${cityInfo.stampDutyRate} stamp duty calculation. Instant PDF download. ${cityInfo.name} rental agreement kaise banaye - complete guide.`}
        keywords={`rent agreement ${cityInfo.name.toLowerCase()}, rental agreement ${cityInfo.name.toLowerCase()}, ${cityInfo.name.toLowerCase()} rent agreement format, ${cityInfo.name.toLowerCase()} rental agreement online, stamp duty ${cityInfo.name.toLowerCase()}, rent agreement registration ${cityInfo.name.toLowerCase()}, ${cityInfo.nameHindi} किराया एग्रीमेंट`}
        canonicalUrl={`/rent-agreement/${city}`}
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Rent Agreement", url: "/templates" },
          { name: cityInfo.name, url: `/rent-agreement/${city}` }
        ]}
      />
      
      <HeaderAdSenseCompliant />
      <PageBreadcrumb items={[
        { label: "Rent Agreement", href: "/templates" },
        { label: cityInfo.name }
      ]} />
      
      <main className="flex-grow bg-gradient-to-b from-white to-legal-light">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-legal-accent/10 text-legal-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              {cityInfo.name} ({cityInfo.nameHindi})
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-legal-navy mb-4">
              Rent Agreement {cityInfo.name} - Free Online Generator
            </h1>
            <p className="text-lg text-legal-gray max-w-3xl mx-auto mb-6">
              {cityInfo.name} mein rent agreement banana ab bahut easy hai. DocuCreator Pro se professional rental agreement create karo with {cityInfo.stampDutyRate} stamp duty calculation. Instant PDF download karo.
            </p>
            <Link to="/?template=agreements-rental">
              <Button size="lg" className="bg-legal-navy hover:bg-legal-accent text-white">
                <FileText className="w-5 h-5 mr-2" />
                Create Rent Agreement Now - Free
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <IndianRupee className="w-8 h-8 text-legal-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-legal-navy">{cityInfo.stampDutyRate}</div>
              <div className="text-sm text-legal-gray">Stamp Duty Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <FileCheck className="w-8 h-8 text-legal-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-legal-navy">{cityInfo.registrationFee}</div>
              <div className="text-sm text-legal-gray">Registration Fee</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <Building className="w-8 h-8 text-legal-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-legal-navy">{cityInfo.averageRent}</div>
              <div className="text-sm text-legal-gray">Avg Monthly Rent</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <Clock className="w-8 h-8 text-legal-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-legal-navy">11 Months</div>
              <div className="text-sm text-legal-gray">Standard Duration</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stamp Duty Section */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-legal-navy mb-4">
                  {cityInfo.name} Mein Stamp Duty Calculation
                </h2>
                <div className="prose max-w-none text-legal-gray">
                  <p>
                    {cityInfo.name} mein rent agreement ke liye stamp duty <strong>{cityInfo.stampDutyRate}</strong> lagti hai. 
                    Calculation method: <strong>{cityInfo.stampDutyCalculation}</strong>.
                  </p>
                  
                  <div className="bg-legal-light p-4 rounded-lg my-4">
                    <h4 className="font-semibold text-legal-navy mb-2">Example Calculation:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Monthly Rent: ₹25,000</li>
                      <li>Security Deposit: ₹75,000</li>
                      <li>Agreement Duration: 11 months</li>
                      <li>Total Rent Value: ₹2,75,000</li>
                      <li>With Deposit: ₹3,50,000</li>
                      <li><strong>Stamp Duty ({cityInfo.stampDutyRate}): ₹{Math.round(350000 * parseFloat(cityInfo.stampDutyRate) / 100)}</strong></li>
                    </ul>
                  </div>

                  {cityInfo.eRegistrationPortal && (
                    <p className="text-sm">
                      E-Stamp Paper Online: <a href={cityInfo.eRegistrationPortal} target="_blank" rel="noopener noreferrer" className="text-legal-accent hover:underline">{cityInfo.eRegistrationPortal}</a>
                    </p>
                  )}
                </div>
              </section>

              {/* Local Tips */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-legal-navy mb-4">
                  {cityInfo.name} Rent Agreement Tips
                </h2>
                <ul className="space-y-3">
                  {cityInfo.localTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-legal-gray">{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Sub-Registrar Offices */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-legal-navy mb-4">
                  Sub-Registrar Offices in {cityInfo.name}
                </h2>
                <p className="text-legal-gray mb-4">
                  12 months se zyada ke agreement ke liye registration Sub-Registrar office mein zaruri hai. {cityInfo.name} ke main offices:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {cityInfo.subRegistrarOffices.map((office, index) => (
                    <div key={index} className="flex items-center gap-2 bg-legal-light p-3 rounded">
                      <MapPin className="w-4 h-4 text-legal-accent" />
                      <span className="text-sm text-legal-navy">{office}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Popular Areas */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-legal-navy mb-4">
                  Popular Rental Areas in {cityInfo.name}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cityInfo.popularAreas.map((area, index) => (
                    <span key={index} className="bg-legal-navy/10 text-legal-navy px-3 py-1 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-legal-navy p-6 rounded-lg text-white sticky top-4">
                <h3 className="text-xl font-bold mb-4">Create {cityInfo.name} Rent Agreement</h3>
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Professionally formatted
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    All essential clauses included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Instant PDF download
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    100% Free - No hidden charges
                  </li>
                </ul>
                <Link to="/?template=agreements-rental" className="block">
                  <Button className="w-full bg-white text-legal-navy hover:bg-legal-light">
                    Create Now - Free
                  </Button>
                </Link>
              </div>

              {/* Other Documents */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-legal-navy mb-4">Other Documents</h3>
                <div className="space-y-2">
                  <Link to="/?template=agreements-employment" className="flex items-center gap-2 text-legal-gray hover:text-legal-accent transition-colors">
                    <FileText className="w-4 h-4" />
                    Employment Agreement
                  </Link>
                  <Link to="/?template=confidential-nda" className="flex items-center gap-2 text-legal-gray hover:text-legal-accent transition-colors">
                    <FileText className="w-4 h-4" />
                    NDA Agreement
                  </Link>
                  <Link to="/?template=legaldocs-poa" className="flex items-center gap-2 text-legal-gray hover:text-legal-accent transition-colors">
                    <FileText className="w-4 h-4" />
                    Power of Attorney
                  </Link>
                  <Link to="/?template=agreements-partnership" className="flex items-center gap-2 text-legal-gray hover:text-legal-accent transition-colors">
                    <FileText className="w-4 h-4" />
                    Partnership Deed
                  </Link>
                </div>
              </div>

              {/* Other Cities */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-legal-navy mb-4">Rent Agreement Other Cities</h3>
                <div className="space-y-2">
                  {Object.entries(cityData)
                    .filter(([key]) => key !== city?.toLowerCase())
                    .slice(0, 6)
                    .map(([key, data]) => (
                      <Link 
                        key={key} 
                        to={`/rent-agreement/${key}`}
                        className="flex items-center gap-2 text-legal-gray hover:text-legal-accent transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        Rent Agreement {data.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-legal-navy mb-6 text-center">
              {cityInfo.name} Rent Agreement - FAQs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="border-l-4 border-legal-accent pl-4">
                  <h3 className="font-semibold text-legal-navy mb-2">{faq.question}</h3>
                  <p className="text-legal-gray text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <PlayStoreCompliantDisclaimer />
      </main>
      
      <FooterAdSenseCompliant />
    </div>
  );
};

export default CityLanding;
