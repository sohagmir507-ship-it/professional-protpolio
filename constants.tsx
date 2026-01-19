
import React from 'react';
import { 
  Search, 
  Settings, 
  MapPin, 
  FileText, 
  Youtube, 
  ListVideo, 
  BarChart3,
  Globe,
  Zap,
  Shield,
  Layers,
  Cpu,
  Activity,
  Share2,
  MousePointerClick,
  Mail,
  Megaphone,
  TrendingUp
} from 'lucide-react';
import { Service, ValueProp, ProcessStep, ProofCase } from './types';

export const BRAND_NAME = "Soiyod Sohag Mir";
export const TITLE = "Website SEO & YouTube SEO Strategist";
export const SUBTITLE = "Organic Growth Specialist";

export const LINKS = {
  FIVERR: "https://www.fiverr.com/sellers/seoandadsgeek/",
  FREELANCER: "https://www.freelancer.com/u/SEOandAdsExpert",
  WHATSAPP: "https://wa.me/88013057826",
  LINKEDIN: "https://www.linkedin.com/in/soiyod-sohag-mir/"
};

export const STATS = [
  { label: "Happy Clients", value: "140+", color: "from-fuchsia-400 to-purple-500" },
  { label: "Satisfaction Rate", value: "98%", color: "from-pink-400 to-rose-500" },
  { label: "Award Winning", value: "13+", color: "from-purple-400 to-indigo-500" },
  { label: "Completed Projects", value: "140+", color: "from-fuchsia-500 to-pink-600" }
];

export const TRUSTED_COMPANIES = [
  { name: "TechFlow", icon: <Zap className="w-5 h-5" /> },
  { name: "GlobalLogic", icon: <Globe className="w-5 h-5" /> },
  { name: "PrimeMedia", icon: <Layers className="w-5 h-5" /> },
  { name: "ZenStream", icon: <Activity className="w-5 h-5" /> },
  { name: "DataNexus", icon: <Cpu className="w-5 h-5" /> },
  { name: "CloudWave", icon: <Shield className="w-5 h-5" /> }
];

export const SERVICES: Service[] = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Comprehensive on-page and off-page optimization for maximum Google visibility.",
    icon: <Search className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Technical SEO & Website Audits",
    description: "Deep-dive technical analysis to ensure your site is perfectly indexable and fast.",
    icon: <Settings className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Local SEO & Google Business",
    description: "Dominating local search results and optimizing your Google Business Profile.",
    icon: <MapPin className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Content SEO & Keyword Strategy",
    description: "Data-driven research to target keywords that actually convert into revenue.",
    icon: <FileText className="w-6 h-6 text-slate-700" />
  },
  {
    title: "YouTube SEO & Video Optimization",
    description: "Proven tactics to boost video rankings, CTR, and watch time organically.",
    icon: <Youtube className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Channel & Playlist SEO",
    description: "Structural channel optimization to improve authority and user retention.",
    icon: <ListVideo className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Social Media Marketing (SMM)",
    description: "Strategic management and organic growth for major social platforms.",
    icon: <Share2 className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Search Engine Marketing (PPC)",
    description: "High-ROI Google Ads and Bing Ads campaigns managed for maximum leads.",
    icon: <MousePointerClick className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Social Media Advertising",
    description: "Targeted Meta (Facebook/Instagram) and LinkedIn ad strategies.",
    icon: <Megaphone className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Email Marketing & Automation",
    description: "Automated funnel sequences that nurture leads and drive repeat sales.",
    icon: <Mail className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Conversion Rate Optimization",
    description: "A/B testing and UI/UX tweaks to turn more visitors into paying customers.",
    icon: <TrendingUp className="w-6 h-6 text-slate-700" />
  },
  {
    title: "Analytics & Reporting",
    description: "Transparent, detailed tracking of performance and organic growth metrics.",
    icon: <BarChart3 className="w-6 h-6 text-slate-700" />
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Dual Expertise",
    description: "Advanced mastery in both Google search and YouTube video algorithms."
  },
  {
    title: "ROI Focused",
    description: "Rankings are meaningless without leads. I focus on strategies that generate revenue."
  },
  {
    title: "Ethical & Safe",
    description: "Zero shortcuts or spam tactics. 100% white-hat, algorithm-compliant execution."
  },
  {
    title: "Scalable Growth",
    description: "Building long-term authority that grows sustainably over time."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Audit & Research",
    description: "Understanding your current position and identifying untapped growth opportunities."
  },
  {
    number: "02",
    title: "Keyword & Competitor Analysis",
    description: "Analyzing the landscape to find high-intent keywords and competitor weaknesses."
  },
  {
    number: "03",
    title: "Optimization & Execution",
    description: "Implementing strategic changes across your website or YouTube channel."
  },
  {
    number: "04",
    title: "Tracking, Reporting & Scaling",
    description: "Monitoring results and adjusting strategies to maintain upward momentum."
  }
];

export const PROOF_CASES: ProofCase[] = [
  // Website SEO Proof
  {
    title: "Steady SEO Growth & Visibility",
    imageUrl: "/images/Screenshot_1.png",
    category: 'website',
    description: "Healthcare industry monthly management. Achieved 500+ organic keyword growth and nearly 48K monthly organic traffic visits with a strong focus on the UK market."
  },
  {
    title: "Local Moving & Cleaning SEO",
    imageUrl: "/images/Screenshot_2.png",
    category: 'website',
    description: "3-month campaign resulting in 5.47K impressions and 53 organic clicks through backlink work, technical fixes, and local keyword optimization."
  },
  {
    title: "Tech Retail Brand Expansion",
    imageUrl: "/images/Screenshot_3.png",
    category: 'website',
    description: "Managed monthly SEO for a retail brand, growing organic traffic to 65K per month and increasing keyword rankings by over 12K."
  },
  {
    title: "Legal Niche: Traffic Tickets",
    imageUrl: "/images/Screenshot_4.png",
    category: 'website',
    description: "Boosted getdismissed.com with 20.6K clicks and 1.63M impressions in 3 months. Improved average search position to 14.7."
  },
  {
    title: "EkoPlanet.lt Baltic Growth",
    imageUrl: "/images/Screenshot_5.png",
    category: 'website',
    description: "E-commerce strategy for organic products. 12.7K clicks and 346K impressions in 3 months. Backlinks grew by 31% to 1.2M."
  },
  {
    title: "Global Reach SEO Strategy",
    imageUrl: "/images/Screenshot_6.png",
    category: 'website',
    description: "Monthly plan focusing on keyword optimization and backlink building, resulting in 2,500+ new keywords and 2.8K+ additional monthly visitors."
  },
  {
    title: "US Market Ground Up Growth",
    imageUrl: "/images/Screenshot_7.png",
    category: 'website',
    description: "Taking a site from minimal reach to over 1K monthly visits using high-quality backlinks and clean on-page health."
  },
  {
    title: "Content Strategy & Traffic",
    imageUrl: "/images/Screenshot_8.png",
    category: 'website',
    description: "Consistent organic growth achieved through data-driven content planning and authority-based link building."
  },
  {
    title: "Rankings & Traffic Boost",
    imageUrl: "/images/Screenshot_9.png",
    category: 'website',
    description: "Full SEO execution: GSC setup, indexing resolution, and 200 authoritative backlinks achieving 12.5K total clicks and a 4% CTR."
  },
  // YouTube Proof
  { title: "Channel Analytics Growth", imageUrl: "/images/Youtube-Channel-seo-after-and-before-scaled.jpg", category: 'youtube' },
  { title: "VidIQ SEO Score Improvement", imageUrl: "/images/YouTube-SEO-before-and-after-optimization-showing-improvements-in-VidIQ-SEO-score-and-keyword-rankings-1.jpg", category: 'youtube' },
  { title: "Keyword Rankings Boost", imageUrl: "/images/YouTube-SEO-before-and-after-optimization-showing-improvements-in-VidIQ-SEO-score-and-keyword-rankings-2.jpg", category: 'youtube' },
  { title: "VidIQ Optimization Results", imageUrl: "/images/YouTube-SEO-before-and-after-optimization-showing-improvements-in-VidIQ-SEO-score-and-keyword-rankings-3.jpg", category: 'youtube' },
  { title: "SEO Score & Ranking Success", imageUrl: "/images/YouTube-SEO-before-and-after-optimization-showing-improvements-in-VidIQ-SEO-score-and-keyword-rankings-4.jpg", category: 'youtube' },
  { title: "YouTube SEO Expert Results", imageUrl: "/images/YouTube-SEO-expert-targetedpulse-1.jpg", category: 'youtube' },
  { title: "Organic Views Boost", imageUrl: "/images/YouTube-SEO-expert-targetedpulse-2.jpg", category: 'youtube' },
  { title: "Video Performance Scaling", imageUrl: "/images/YouTube-SEO-expert-targetedpulse-3.jpg", category: 'youtube' },
  { title: "Subscriber Growth Strategy", imageUrl: "/images/YouTube-SEO-expert-targetedpulse-4.jpg", category: 'youtube' },
  { title: "Long-term Video Ranking", imageUrl: "/images/YouTube-SEO-expert-targetedpulse-5.jpg", category: 'youtube' },
  { title: "Watch Time Optimization", imageUrl: "/images/YouTube-SEO-expert-targetedpulse-6.jpg", category: 'youtube' },
  { title: "Playlist Strategy Results", imageUrl: "/images/YouTube-SEO-expert-targetedpulse-7.jpg", category: 'youtube' },
  { title: "Analytics Overview Growth", imageUrl: "/images/YouTube-SEO-expert-targetedpulse-8.jpg", category: 'youtube' },
  { title: "YouTube Marketing Success", imageUrl: "/images/YouTube-Marketing-1.png", category: 'youtube' }
];
