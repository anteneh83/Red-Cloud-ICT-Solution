export interface PartnerCategory {
  category: string;
  description: string;
  partners: {
    name: string;
    type: string;
    isVerified: boolean;
  }[];
}

export const partnersData: PartnerCategory[] = [
  {
    category: "Telecommunications & Carrier Alliances",
    description: "Interconnection, peering, and high-capacity network transport partners.",
    partners: [
      { name: "National Telecom Carriers", type: "Upstream Transit", isVerified: false },
      { name: "IT Park Connectivity Hub", type: "Fiber Infrastructure", isVerified: false },
    ],
  },
  {
    category: "Banking & Financial Switch Integrations",
    description: "Payment switches, core banking interfaces, and settlement gateways.",
    partners: [
      { name: "National Payment Switches", type: "Switch Interoperability", isVerified: false },
      { name: "Commercial Banking APIs", type: "Direct Clearing", isVerified: false },
    ],
  },
  {
    category: "Enterprise System Integrators",
    description: "Regional ERP implementers, hardware vendors, and technology consultants.",
    partners: [
      { name: "Regional ERP Partners", type: "CNET / Enterprise ERP", isVerified: false },
      { name: "Hardware Infrastructure Vendors", type: "Tier Data Center Equipment", isVerified: false },
    ],
  },
];
