export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  established: number;
  about: string;
  mission: string;
  commitment: string;
  address: {
    street: string;
    city: string;
    country: string;
    full: string;
  };
  contact: {
    shortCode: string;
    email: string;
    inquiriesEmail: string;
    supportEmail: string;
  };
  social: {
    linkedin?: string;
    telegram?: string;
    twitter?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  metrics: {
    label: string;
    value: string;
    isPlaceholder?: boolean;
    description: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Red Cloud ICT Solutions PLC",
  shortName: "Red Cloud",
  tagline: "Take Your Business Online",
  heroHeadline: "BUILDING THE DIGITAL INFRASTRUCTURE FOR TOMORROW",
  heroSubtitle:
    "Technology, infrastructure and intelligent digital solutions that help businesses operate smarter, scale faster and transform with confidence.",
  established: 2022,
  about:
    "Welcome to Red Cloud ICT Solutions PLC, your trusted partner in digital transformation. Established in 2022, we are a leading force in the ICT industry, committed to innovation, quality, and customer satisfaction.",
  mission:
    "Empowering businesses with cutting-edge technology solutions to drive efficiency, growth, and success.",
  commitment:
    "Aligning with the country's digital strategy and policy, we continuously strive to provide innovative solutions that exceed our clients' expectations.",
  address: {
    street: "Ethiopian IT Park, Goro Road to Tulu Dimtu",
    city: "Addis Ababa",
    country: "Ethiopia",
    full: "Ethiopian IT Park, Goro Road to Tulu Dimtu, Addis Ababa, Ethiopia",
  },
  contact: {
    shortCode: "8025",
    email: "admin@redcloud.com.et",
    inquiriesEmail: "info@redcloud.com.et",
    supportEmail: "support@redcloud.com.et",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/red-cloud-ict-solutions",
    telegram: "https://t.me/redcloudet",
  },
  coordinates: {
    lat: 8.9288,
    lng: 38.8354,
  },
  metrics: [
    {
      label: "Foundation",
      value: "2022",
      description: "Established in Ethiopian ICT Park",
    },
    {
      label: "Core Pillars",
      value: "5 Pillars",
      description: "Cloud, FinTech, E-Commerce, VISP & Automation",
    },
    {
      label: "Support Hotline",
      value: "8025",
      description: "Dedicated enterprise assistance line",
    },
    {
      label: "Active Clients",
      value: "[Enterprise Scale]",
      isPlaceholder: true,
      description: "Official metrics to be updated upon release",
    },
  ],
};
