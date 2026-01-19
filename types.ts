
export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProofCase {
  title: string;
  imageUrl: string;
  description?: string;
  category: 'youtube' | 'website';
}
