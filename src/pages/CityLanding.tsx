import React from 'react';
import { useParams, Link } from 'react-router-dom';
import HeaderAdSenseCompliant from '@/components/HeaderAdSenseCompliant';
import FooterAdSenseCompliant from '@/components/FooterAdSenseCompliant';
import SEOMetadata from '@/components/SEOMetadata';
import PlayStoreCompliantDisclaimer from '@/components/PlayStoreCompliantDisclaimer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle2, MapPin, IndianRupee, FileCheck, Users, Building, Clock, AlertTriangle, ClipboardList, Scale } from 'lucide-react';

// City-specific data for Local SEO
const cityData: Record<string, {
  name: string;
  nameHindi: string;
  state: string;
  stampDutyRate: string;
  registrationFee: string;
  subRegistrarOffices: string[];
  averageRent: string;
  popularAreas: string[];
  areaWiseRent: { area: string; rent: string; type: string }[];
  localTips: string[];
  stampDutyCalculation: string;
  eRegistrationPortal?: string;
  policeVerification: string;
  documentsRequired: string[];
  processSteps: string[];
  commonMistakes: string[];
  legalAct: string;
}> = {
  'mumbai': {
    name: 'Mumbai',
    nameHindi: 'मुंबई',
    state: 'Maharashtra',
    stampDutyRate: '0.25%',
    registrationFee: '1% (max ₹30,000)',
    subRegistrarOffices: ['Andheri', 'Bandra', 'Borivali', 'Thane', 'Dadar', 'Malad', 'Powai', 'Kurla'],
    averageRent: '₹25,000 - ₹80,000',
    popularAreas: ['Andheri West', 'Bandra East', 'Powai', 'Malad West', 'Thane West', 'Goregaon', 'Lower Parel', 'Worli'],
    areaWiseRent: [
      { area: 'Andheri West', rent: '₹30,000 - ₹60,000', type: '2BHK' },
      { area: 'Bandra East', rent: '₹40,000 - ₹80,000', type: '2BHK' },
      { area: 'Powai', rent: '₹35,000 - ₹70,000', type: '2BHK' },
      { area: 'Thane West', rent: '₹20,000 - ₹40,000', type: '2BHK' },
      { area: 'Malad West', rent: '₹25,000 - ₹45,000', type: '2BHK' },
      { area: 'Lower Parel', rent: '₹50,000 - ₹1,00,000', type: '2BHK' }
    ],
    localTips: [
      'Leave and License format use karo - Mumbai mein ye standard hai',
      'Society NOC zaruri hai agreement banane se pehle',
      'Police verification mandatory hai tenant ke liye - online file karo',
      '11 months agreement pe registration optional but recommended',
      'RERA registered property verify karo buying/renting se pehle'
    ],
    stampDutyCalculation: 'Total Rent + Deposit ka 0.25%',
    eRegistrationPortal: 'https://igrmaharashtra.gov.in/',
    policeVerification: 'Online via Mumbai Police website - https://mumbaipolice.gov.in/',
    documentsRequired: [
      'Landlord Aadhaar Card + PAN Card',
      'Tenant Aadhaar Card + PAN Card',
      'Property ownership proof (Index II / Society letter)',
      'Society NOC (mandatory)',
      'Passport size photos (2 each)',
      'Previous rental agreement (if any)',
      'Employment proof of tenant'
    ],
    processSteps: [
      'Collect all documents from landlord and tenant',
      'Get Society NOC from housing society',
      'Calculate stamp duty (0.25% of total value)',
      'Purchase e-stamp paper from SHCIL or authorized vendor',
      'Draft Leave and License agreement with all clauses',
      'Sign agreement with 2 witnesses',
      'Register online via IGR Maharashtra portal',
      'Complete police verification for tenant'
    ],
    commonMistakes: [
      'Not getting Society NOC before signing',
      'Incorrect stamp duty calculation',
      'Missing police verification',
      'Not mentioning maintenance charges clearly',
      'Vague property description without flat/floor number'
    ],
    legalAct: 'Maharashtra Rent Control Act, 1999'
  },
  'delhi': {
    name: 'Delhi',
    nameHindi: 'दिल्ली',
    state: 'Delhi NCR',
    stampDutyRate: '2%',
    registrationFee: '1%',
    subRegistrarOffices: ['Saket', 'Rohini', 'Dwarka', 'Laxmi Nagar', 'Janakpuri', 'Pitampura', 'Shahdara', 'Nehru Place'],
    averageRent: '₹15,000 - ₹50,000',
    popularAreas: ['Dwarka', 'Rohini', 'Saket', 'Lajpat Nagar', 'Mayur Vihar', 'Vasant Kunj', 'Greater Kailash', 'Karol Bagh'],
    areaWiseRent: [
      { area: 'Dwarka', rent: '₹18,000 - ₹35,000', type: '2BHK' },
      { area: 'Rohini', rent: '₹15,000 - ₹30,000', type: '2BHK' },
      { area: 'Saket', rent: '₹25,000 - ₹50,000', type: '2BHK' },
      { area: 'Mayur Vihar', rent: '₹20,000 - ₹40,000', type: '2BHK' },
      { area: 'Greater Kailash', rent: '₹35,000 - ₹70,000', type: '2BHK' },
      { area: 'Vasant Kunj', rent: '₹30,000 - ₹55,000', type: '2BHK' }
    ],
    localTips: [
      'Delhi mein 2% stamp duty lagti hai - other states se zyada hai',
      'Police verification form online submit kar sakte ho Delhi Police website pe',
      'DDA flat mein NOC DDA office se lena padta hai',
      'Metro connectivity wale areas mein rent zyada hai',
      'Unauthorized colonies mein agreement bhi valid hai but registration difficult'
    ],
    stampDutyCalculation: 'Annual Rent Value ka 2%',
    eRegistrationPortal: 'https://doris.delhi.gov.in/',
    policeVerification: 'Online via Delhi Police - https://dfrportal.gov.in/',
    documentsRequired: [
      'Landlord Aadhaar Card + PAN Card',
      'Tenant Aadhaar Card + PAN Card',
      'Property documents (Registry / Allotment letter)',
      'DDA NOC (for DDA flats)',
      'Passport size photos (2 each)',
      'Police verification form',
      'Electricity bill (latest)'
    ],
    processSteps: [
      'Verify property documents with landlord',
      'Collect identity proofs from both parties',
      'Calculate stamp duty (2% of annual rent)',
      'Purchase e-stamp paper from Delhi e-Stamping',
      'Draft rental agreement with all terms',
      'Get agreement signed with 2 witnesses',
      'Register at Sub-Registrar office or online via DORIS',
      'Submit police verification form within 24 hours'
    ],
    commonMistakes: [
      'Not filing police verification within 24 hours',
      'Undervaluing rent to save stamp duty (illegal)',
      'Not checking DDA/unauthorized colony status',
      'Missing NOC for DDA flats',
      'Not mentioning security deposit refund terms'
    ],
    legalAct: 'Delhi Rent Control Act, 1958'
  },
  'bangalore': {
    name: 'Bangalore',
    nameHindi: 'बेंगलुरु',
    state: 'Karnataka',
    stampDutyRate: '1%',
    registrationFee: '1%',
    subRegistrarOffices: ['Koramangala', 'Whitefield', 'Electronic City', 'HSR Layout', 'Marathahalli', 'Jayanagar', 'Indiranagar', 'Yelahanka'],
    averageRent: '₹18,000 - ₹45,000',
    popularAreas: ['Koramangala', 'HSR Layout', 'Whitefield', 'Indiranagar', 'Electronic City', 'Marathahalli', 'BTM Layout', 'Sarjapur Road'],
    areaWiseRent: [
      { area: 'Koramangala', rent: '₹25,000 - ₹50,000', type: '2BHK' },
      { area: 'HSR Layout', rent: '₹22,000 - ₹40,000', type: '2BHK' },
      { area: 'Whitefield', rent: '₹20,000 - ₹38,000', type: '2BHK' },
      { area: 'Indiranagar', rent: '₹30,000 - ₹60,000', type: '2BHK' },
      { area: 'Electronic City', rent: '₹15,000 - ₹28,000', type: '2BHK' },
      { area: 'Marathahalli', rent: '₹18,000 - ₹35,000', type: '2BHK' }
    ],
    localTips: [
      'Karnataka mein 10 months security deposit standard hai',
      'BBMP tax receipt landlord se zarur lo verification ke liye',
      'IT hub areas mein furnished flats common hain - inventory list banao',
      'Kaveri Online portal se e-stamp le sakte ho easily',
      'Police verification BATF portal se online file karo'
    ],
    stampDutyCalculation: 'Total Rent for Agreement Period ka 1%',
    eRegistrationPortal: 'https://kaveri.karnataka.gov.in/',
    policeVerification: 'Online via BATF - https://ksp.karnataka.gov.in/',
    documentsRequired: [
      'Landlord Aadhaar Card + PAN Card',
      'Tenant Aadhaar Card + PAN Card',
      'Property documents (Sale deed / Khata)',
      'BBMP Property Tax Receipt',
      'Passport size photos (2 each)',
      'Employment ID proof of tenant',
      'Previous address proof'
    ],
    processSteps: [
      'Verify property Khata and tax receipts',
      'Collect all identity documents',
      'Calculate stamp duty (1% of total rent value)',
      'Purchase e-stamp from Kaveri portal',
      'Draft rental agreement with 10 months deposit clause',
      'Sign with 2 witnesses',
      'Register via Kaveri Online or Sub-Registrar office',
      'File police verification on BATF portal'
    ],
    commonMistakes: [
      'Not verifying BBMP Khata before signing',
      'Ignoring 10 months deposit standard',
      'Not creating inventory for furnished flats',
      'Missing maintenance clause in agreement',
      'Not filing tenant verification online'
    ],
    legalAct: 'Karnataka Rent Control Act, 2001'
  },
  'hyderabad': {
    name: 'Hyderabad',
    nameHindi: 'हैदराबाद',
    state: 'Telangana',
    stampDutyRate: '0.5%',
    registrationFee: '0.5%',
    subRegistrarOffices: ['Madhapur', 'Gachibowli', 'Kondapur', 'Kukatpally', 'Secunderabad', 'Banjara Hills', 'Jubilee Hills', 'LB Nagar'],
    averageRent: '₹12,000 - ₹35,000',
    popularAreas: ['Madhapur', 'Gachibowli', 'Kondapur', 'Kukatpally', 'Hitech City', 'Jubilee Hills', 'Banjara Hills', 'Miyapur'],
    areaWiseRent: [
      { area: 'Madhapur', rent: '₹18,000 - ₹35,000', type: '2BHK' },
      { area: 'Gachibowli', rent: '₹20,000 - ₹40,000', type: '2BHK' },
      { area: 'Kondapur', rent: '₹15,000 - ₹30,000', type: '2BHK' },
      { area: 'Hitech City', rent: '₹22,000 - ₹45,000', type: '2BHK' },
      { area: 'Kukatpally', rent: '₹12,000 - ₹25,000', type: '2BHK' },
      { area: 'Miyapur', rent: '₹10,000 - ₹20,000', type: '2BHK' }
    ],
    localTips: [
      'Telangana mein stamp duty bahut low hai - sirf 0.5%',
      'IT corridor areas mein corporate leasing common hai',
      'GHMC property tax receipt verify karo landlord se',
      'Mee Seva centers se bhi e-stamp mil jata hai easily',
      'Police verification online TSCOP portal se karo'
    ],
    stampDutyCalculation: 'Total Agreement Value ka 0.5%',
    eRegistrationPortal: 'https://registration.telangana.gov.in/',
    policeVerification: 'Online via TSCOP - https://www.tscop.gov.in/',
    documentsRequired: [
      'Landlord Aadhaar Card + PAN Card',
      'Tenant Aadhaar Card + PAN Card',
      'Property documents (Sale deed)',
      'GHMC Property Tax Receipt',
      'Passport size photos (2 each)',
      'Company ID (for IT employees)',
      'Previous address proof'
    ],
    processSteps: [
      'Verify GHMC records for property',
      'Collect identity documents',
      'Calculate stamp duty (0.5% of total value)',
      'Purchase e-stamp from Mee Seva or online',
      'Draft rental agreement',
      'Sign with 2 witnesses',
      'Register via IGRS Telangana portal',
      'Complete police verification on TSCOP'
    ],
    commonMistakes: [
      'Not verifying GHMC tax status',
      'Missing corporate lease clauses for IT employees',
      'Not specifying water/electricity charges',
      'Vague termination terms',
      'Not filing tenant verification'
    ],
    legalAct: 'Telangana Buildings (Lease, Rent & Eviction) Control Act'
  },
  'chennai': {
    name: 'Chennai',
    nameHindi: 'चेन्नई',
    state: 'Tamil Nadu',
    stampDutyRate: '1%',
    registrationFee: '1%',
    subRegistrarOffices: ['Anna Nagar', 'T Nagar', 'Velachery', 'OMR', 'Adyar', 'Guindy', 'Tambaram', 'Porur'],
    averageRent: '₹15,000 - ₹40,000',
    popularAreas: ['Anna Nagar', 'Velachery', 'OMR', 'Adyar', 'Besant Nagar', 'Porur', 'Tambaram', 'Sholinganallur'],
    areaWiseRent: [
      { area: 'Anna Nagar', rent: '₹20,000 - ₹40,000', type: '2BHK' },
      { area: 'Velachery', rent: '₹15,000 - ₹30,000', type: '2BHK' },
      { area: 'OMR', rent: '₹18,000 - ₹35,000', type: '2BHK' },
      { area: 'Adyar', rent: '₹22,000 - ₹45,000', type: '2BHK' },
      { area: 'Tambaram', rent: '₹12,000 - ₹22,000', type: '2BHK' },
      { area: 'Sholinganallur', rent: '₹16,000 - ₹32,000', type: '2BHK' }
    ],
    localTips: [
      'Tamil Nadu mein rental agreement Tamil mein bhi acceptable hai',
      'CMDA approved layout verify karo purchase/rent ke liye',
      'OMR IT corridor mein furnished apartments common',
      'TNEB electricity bill transfer karwana important hai',
      'Advance rent typically 2-3 months hai Chennai mein'
    ],
    stampDutyCalculation: 'Annual Rent Value ka 1%',
    eRegistrationPortal: 'https://tnreginet.gov.in/',
    policeVerification: 'Via local police station or TNPOL portal',
    documentsRequired: [
      'Landlord Aadhaar Card + PAN Card',
      'Tenant Aadhaar Card + PAN Card',
      'Property documents (Patta / Sale deed)',
      'CMDA approval (if applicable)',
      'Passport size photos (2 each)',
      'Employment proof',
      'TNEB bill (latest)'
    ],
    processSteps: [
      'Verify property Patta and CMDA status',
      'Collect all documents',
      'Calculate stamp duty (1% of annual rent)',
      'Purchase e-stamp from TNREGINET',
      'Draft rental agreement in English/Tamil',
      'Sign with 2 witnesses',
      'Register at Sub-Registrar office',
      'Complete police verification'
    ],
    commonMistakes: [
      'Not checking CMDA approval for layouts',
      'Ignoring TNEB transfer process',
      'Not specifying advance rent terms clearly',
      'Missing water connection transfer clause',
      'Vague maintenance responsibilities'
    ],
    legalAct: 'Tamil Nadu Buildings (Lease and Rent Control) Act, 1960'
  },
  'pune': {
    name: 'Pune',
    nameHindi: 'पुणे',
    state: 'Maharashtra',
    stampDutyRate: '0.25%',
    registrationFee: '1% (max ₹30,000)',
    subRegistrarOffices: ['Shivaji Nagar', 'Kothrud', 'Hinjewadi', 'Wakad', 'Baner', 'Viman Nagar', 'Hadapsar', 'Kharadi'],
    averageRent: '₹15,000 - ₹40,000',
    popularAreas: ['Hinjewadi', 'Kothrud', 'Baner', 'Wakad', 'Viman Nagar', 'Hadapsar', 'Kharadi', 'Aundh'],
    areaWiseRent: [
      { area: 'Hinjewadi', rent: '₹18,000 - ₹35,000', type: '2BHK' },
      { area: 'Kothrud', rent: '₹20,000 - ₹40,000', type: '2BHK' },
      { area: 'Baner', rent: '₹22,000 - ₹45,000', type: '2BHK' },
      { area: 'Wakad', rent: '₹16,000 - ₹30,000', type: '2BHK' },
      { area: 'Kharadi', rent: '₹18,000 - ₹35,000', type: '2BHK' },
      { area: 'Hadapsar', rent: '₹14,000 - ₹28,000', type: '2BHK' }
    ],
    localTips: [
      'Maharashtra rules apply - Leave and License format use karo',
      'IT Park areas mein company lease agreements common',
      'PMC/PCMC area check karo - rules slightly different',
      'Society maintenance clearly mention karo agreement mein',
      'Police verification online via Pune Police portal'
    ],
    stampDutyCalculation: 'Total Rent + Deposit ka 0.25%',
    eRegistrationPortal: 'https://igrmaharashtra.gov.in/',
    policeVerification: 'Online via Pune Police - https://punepolice.gov.in/',
    documentsRequired: [
      'Landlord Aadhaar Card + PAN Card',
      'Tenant Aadhaar Card + PAN Card',
      'Property documents (Index II)',
      'Society NOC',
      'Passport size photos (2 each)',
      'Employment/Company ID',
      'Previous rental agreement'
    ],
    processSteps: [
      'Get Society NOC first',
      'Collect all identity documents',
      'Calculate stamp duty (0.25%)',
      'Purchase e-stamp from IGR Maharashtra',
      'Draft Leave and License agreement',
      'Sign with 2 witnesses',
      'Register online or at Sub-Registrar',
      'File police verification online'
    ],
    commonMistakes: [
      'Not getting Society NOC',
      'Confusing PMC and PCMC jurisdiction',
      'Missing IT park specific clauses',
      'Not mentioning parking allocation',
      'Vague society maintenance terms'
    ],
    legalAct: 'Maharashtra Rent Control Act, 1999'
  },
  'noida': {
    name: 'Noida',
    nameHindi: 'नोएडा',
    state: 'Uttar Pradesh',
    stampDutyRate: '4%',
    registrationFee: '2%',
    subRegistrarOffices: ['Sector 62', 'Sector 18', 'Greater Noida', 'Sector 137', 'Sector 76', 'Sector 150'],
    averageRent: '₹12,000 - ₹35,000',
    popularAreas: ['Sector 62', 'Sector 137', 'Sector 75', 'Greater Noida West', 'Sector 128', 'Sector 50', 'Sector 78', 'Sector 143'],
    areaWiseRent: [
      { area: 'Sector 62', rent: '₹15,000 - ₹30,000', type: '2BHK' },
      { area: 'Sector 137', rent: '₹18,000 - ₹35,000', type: '2BHK' },
      { area: 'Greater Noida West', rent: '₹10,000 - ₹20,000', type: '2BHK' },
      { area: 'Sector 128', rent: '₹20,000 - ₹40,000', type: '2BHK' },
      { area: 'Sector 75', rent: '₹14,000 - ₹28,000', type: '2BHK' },
      { area: 'Sector 150', rent: '₹16,000 - ₹32,000', type: '2BHK' }
    ],
    localTips: [
      'UP mein stamp duty sabse zyada hai - 4%',
      'Noida Authority apartment mein allotment letter verify karo',
      'Greater Noida West (Noida Extension) mein new constructions hain',
      'Metro connectivity areas mein demand zyada hai',
      'Builder possession letter bhi check karo'
    ],
    stampDutyCalculation: 'Annual Rent Value ka 4%',
    eRegistrationPortal: 'https://igrsup.gov.in/',
    policeVerification: 'Via local police station or UP Police portal',
    documentsRequired: [
      'Landlord Aadhaar Card + PAN Card',
      'Tenant Aadhaar Card + PAN Card',
      'Allotment letter / Registry',
      'Noida Authority NOC (if applicable)',
      'Passport size photos (2 each)',
      'Employment proof',
      'Electricity bill'
    ],
    processSteps: [
      'Verify allotment letter and registry',
      'Collect identity documents',
      'Calculate stamp duty (4% - highest in India)',
      'Purchase e-stamp from IGRS UP',
      'Draft rental agreement',
      'Sign with 2 witnesses',
      'Register at Sub-Registrar office',
      'Complete police verification'
    ],
    commonMistakes: [
      'Not verifying Noida Authority records',
      'Ignoring high stamp duty - budget for it',
      'Not checking builder possession status',
      'Missing society formation status',
      'Vague parking and amenity clauses'
    ],
    legalAct: 'Uttar Pradesh Urban Buildings (Regulation of Letting, Rent and Eviction) Act, 1972'
  },
  'gurgaon': {
    name: 'Gurgaon',
    nameHindi: 'गुरुग्राम',
    state: 'Haryana',
    stampDutyRate: '3%',
    registrationFee: '1.5%',
    subRegistrarOffices: ['Sector 44', 'Sector 14', 'Manesar', 'Sohna Road', 'Golf Course Road', 'MG Road'],
    averageRent: '₹20,000 - ₹60,000',
    popularAreas: ['DLF Phase 1-5', 'Sector 56', 'Golf Course Road', 'Sohna Road', 'MG Road', 'Cyber City', 'Sector 49', 'Nirvana Country'],
    areaWiseRent: [
      { area: 'DLF Phase 1-5', rent: '₹30,000 - ₹70,000', type: '2BHK' },
      { area: 'Golf Course Road', rent: '₹40,000 - ₹90,000', type: '2BHK' },
      { area: 'Sector 56', rent: '₹22,000 - ₹45,000', type: '2BHK' },
      { area: 'Sohna Road', rent: '₹18,000 - ₹35,000', type: '2BHK' },
      { area: 'Sector 49', rent: '₹25,000 - ₹50,000', type: '2BHK' },
      { area: 'Nirvana Country', rent: '₹35,000 - ₹70,000', type: '2BHK' }
    ],
    localTips: [
      'Haryana mein stamp duty 3% hai rental agreements ke liye',
      'DLF, Unitech societies mein premium rent common hai',
      'Corporate housing ke liye 11+11 months agreement standard',
      'Gated communities mein society rules agreement mein mention karo',
      'HRERA registered projects verify karo'
    ],
    stampDutyCalculation: 'Annual Rent Value ka 3%',
    eRegistrationPortal: 'https://jamabandi.nic.in/',
    policeVerification: 'Via Gurgaon Police or Haryana Police portal',
    documentsRequired: [
      'Landlord Aadhaar Card + PAN Card',
      'Tenant Aadhaar Card + PAN Card',
      'Property documents (Registry / Allotment)',
      'Society NOC (for gated communities)',
      'Passport size photos (2 each)',
      'Company employment letter',
      'Previous address proof'
    ],
    processSteps: [
      'Verify property registry and HRERA status',
      'Get Society/RWA NOC if applicable',
      'Calculate stamp duty (3%)',
      'Purchase e-stamp online',
      'Draft rental agreement with society rules',
      'Sign with 2 witnesses',
      'Register at Sub-Registrar office',
      'Complete police verification'
    ],
    commonMistakes: [
      'Not verifying HRERA registration',
      'Ignoring society/RWA rules in agreement',
      'Missing club membership terms',
      'Vague parking bay allocation',
      'Not specifying premium amenity charges'
    ],
    legalAct: 'Haryana Urban (Control of Rent and Eviction) Act, 1973'
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

              {/* Area-wise Rent Table */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-legal-navy mb-4">
                  <IndianRupee className="inline w-6 h-6 mr-2" />
                  {cityInfo.name} Area-wise Rent 2026
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-legal-light">
                        <th className="border border-gray-200 p-3 text-left text-legal-navy">Area</th>
                        <th className="border border-gray-200 p-3 text-left text-legal-navy">Rent Range</th>
                        <th className="border border-gray-200 p-3 text-left text-legal-navy">Flat Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cityInfo.areaWiseRent.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-200 p-3 font-medium text-legal-navy">{item.area}</td>
                          <td className="border border-gray-200 p-3 text-legal-gray">{item.rent}</td>
                          <td className="border border-gray-200 p-3 text-legal-gray">{item.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-legal-gray mt-3">
                  *Rent rates are approximate and may vary based on flat condition, floor, and amenities. Last updated: January 2026
                </p>
              </section>

              {/* Step-by-Step Process */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-legal-navy mb-4">
                  <ClipboardList className="inline w-6 h-6 mr-2" />
                  {cityInfo.name} Rent Agreement - Step by Step Process
                </h2>
                <div className="space-y-4">
                  {cityInfo.processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-legal-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-legal-gray">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Documents Required */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-legal-navy mb-4">
                  <FileCheck className="inline w-6 h-6 mr-2" />
                  Documents Required for {cityInfo.name} Rent Agreement
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {cityInfo.documentsRequired.map((doc, index) => (
                    <div key={index} className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-legal-navy">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Police Verification:</strong> {cityInfo.policeVerification}
                  </p>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-legal-navy mb-4">
                  <AlertTriangle className="inline w-6 h-6 mr-2 text-amber-500" />
                  Common Mistakes to Avoid in {cityInfo.name}
                </h2>
                <div className="space-y-3">
                  {cityInfo.commonMistakes.map((mistake, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <span className="text-red-500 font-bold">✗</span>
                      <span className="text-red-800 text-sm">{mistake}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Legal Act Reference */}
              <section className="bg-gradient-to-r from-legal-navy to-legal-accent p-6 rounded-lg text-white">
                <div className="flex items-start gap-4">
                  <Scale className="w-10 h-10 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Applicable Law</h3>
                    <p className="text-white/90 text-sm">{cityInfo.legalAct}</p>
                    <p className="text-white/70 text-xs mt-2">
                      {cityInfo.state} state laws govern all rental agreements in {cityInfo.name}. Always ensure compliance with local regulations.
                    </p>
                  </div>
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
