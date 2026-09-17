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
  heroHeadline: "Take Your Business Online",
  heroSubtitle:
    "Empowering businesses with cutting-edge technology solutions to drive efficiency, growth, and success.",
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
    full: "Ethiopian IT Park, Goro Road to Tulu Dimtu",
  },
  contact: {
    shortCode: "8025",
    email: "admin@redcloud.com.et",
    inquiriesEmail: "admin@redcloud.com.et",
    supportEmail: "admin@redcloud.com.et",
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
      label: "Customers",
      value: "6000+",
      description: "Trusted clients across enterprise sectors",
    },
    {
      label: "Services",
      value: "17",
      description: "Specialized ICT & infrastructure services",
    },
    {
      label: "Partners",
      value: "16",
      description: "Global & local technology partners",
    },
    {
      label: "Staffs",
      value: "137",
      description: "Dedicated engineering & operations staff",
    },
  ],
};
