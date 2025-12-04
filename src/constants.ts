import { 
  Shield, Truck, Gavel, FileText, Activity, 
  Users, Lock, Search, AlertTriangle, CheckCircle, 
  BarChart3, FileCheck, Scale, Database, Code2, BrainCircuit,
  Link
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Problem', href: '#problem' },
  { name: 'Solution', href: '#solution' },
  { name: 'Features', href: '#features' },
  { name: 'Demo', href: '#demo' },
  { name: 'Team', href: '#team' },
];

export const PAIN_POINTS = [
  {
    id: 1,
    title: 'Unfair Deactivations',
    description: 'Workers lose access to platforms without clear reasons or appeal processes.',
    icon: AlertTriangle,
    color: 'text-red-400'
  },
  {
    id: 2,
    title: 'Withheld Earnings',
    description: 'Payments delayed or denied due to opaque algorithm decisions.',
    icon: Lock,
    color: 'text-orange-400'
  },
  {
    id: 3,
    title: 'Opaque Algorithms',
    description: 'Work allocation and pay rates change constantly without transparency.',
    icon: Search,
    color: 'text-yellow-400'
  }
];

export const PILLARS = [
  {
    id: 1,
    title: 'Transparency Ledger',
    description: 'Immutable record of all gigs, rates, and platform interactions.',
    icon: Database,
  },
  {
    id: 2,
    title: 'Fairness AI',
    description: 'Analyzes gig data to detect wage theft and contract violations.',
    icon: BrainCircuit,
  },
  {
    id: 3,
    title: 'Rights Assistant',
    description: 'Automated legal guidance and dispute letter generation.',
    icon: Scale,
  }
];

export const STEPS = [
  { id: 1, title: 'Upload Data', desc: 'Connect platform account or upload screenshots.' },
  { id: 2, title: 'AI Extraction', desc: 'OCR & NLP parse earnings and trip details.' },
  { id: 3, title: 'Fairness Check', desc: 'Compare against local labor laws & min wage.' },
  { id: 4, title: 'Evidence', desc: 'Generate a verified proof of work report.' },
  { id: 5, title: 'Guidance', desc: 'Get actionable steps to resolve disputes.' },
];

export const FEATURES = [
  {
    title: 'Earnings Verification',
    desc: 'Cross-reference actual pay vs. promised rates.',
    icon: CheckCircle
  },
  {
    title: 'Penalty Explainer',
    desc: 'Translate platform jargon into plain language reasons.',
    icon: FileText
  },
  {
    title: 'Fairness AI',
    desc: 'Real-time scoring of platform treatment.',
    icon: Activity
  },
  {
    title: 'Dispute Generator',
    desc: 'One-click creation of formal appeal letters.',
    icon: Gavel
  },
  {
    title: 'Rights Assistant',
    desc: 'Chatbot trained on gig economy labor laws.',
    icon: Shield
  },
  {
    title: 'Blockchain Ledger',
    desc: 'Tamper-proof history of your work data.',
    icon: Link
  }
];

export const TECH_STACK = [
  { name: 'React / Next.js', icon: Code2 },
  { name: 'Node.js', icon: Database },
  { name: 'Python ML', icon: BrainCircuit },
  { name: 'Tesseract OCR', icon: Search },
  { name: 'Hyperledger', icon: Lock },
];

export const TEAM = [
  { name: 'Alex Chen', role: 'The Hacker', initial: 'AC' },
  { name: 'Sarah Jones', role: 'The Hipster', initial: 'SJ' },
  { name: 'Mike Ross', role: 'The Hustler', initial: 'MR' },
];
