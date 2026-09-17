export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  keySolutions: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: "financial-services",
    name: "Financial Services & Banking",
    tagline: "Resilient core transaction infrastructure and compliance-ready systems.",
    description:
      "Empowering commercial banks, microfinance institutions, and digital payment providers with secure transaction gateways, high-availability hosting, and auditable ledger backbones.",
    iconName: "Landmark",
    keySolutions: ["Financial Technology | FinTech", "Data Center & Hosting", "VISP Connectivity"],
  },
  {
    id: "retail-fmcg",
    name: "Retail & FMCG Distribution",
    tagline: "Modernizing omnichannel supply chains, field sales, and consumer storefronts.",
    description:
      "Equipping fast-moving consumer goods distributors and retailers with real-time field sales tracking, inventory synchronization, and digital storefront ordering channels.",
    iconName: "Store",
    keySolutions: ["Sales Automation", "E-Commerce Solutions", "Data Center & Hosting"],
  },
  {
    id: "telecom-networks",
    name: "Telecommunications & Providers",
    tagline: "High-capacity network interconnection, bandwidth shaping, and peering.",
    description:
      "Delivering virtual ISP routing, carrier-neutral transit peering, and managed SD-WAN architectures for regional network service providers.",
    iconName: "Network",
    keySolutions: ["VISP", "Data Center & Hosting"],
  },
  {
    id: "public-sector",
    name: "Public Sector & Digital Governance",
    tagline: "Aligning with national digital transformation policies and citizen service portals.",
    description:
      "Providing sovereign domestic cloud environments and scalable software platforms that safeguard national records and expand citizen digital accessibility.",
    iconName: "Building2",
    keySolutions: ["Data Center & Hosting", "VISP", "Sales Automation"],
  },
  {
    id: "enterprises-corporations",
    name: "Enterprises & Corporations",
    tagline: "Mission-critical workload migration, multi-branch WAN, and ERP integration.",
    description:
      "Enabling large organizations to consolidate IT infrastructure, optimize operational expenditures, and connect remote branch networks seamlessly.",
    iconName: "Briefcase",
    keySolutions: ["Data Center & Hosting", "VISP", "Sales Automation"],
  },
  {
    id: "smes-startups",
    name: "SMEs & High-Growth Startups",
    tagline: "Accessible enterprise-grade technology to Take Your Business Online.",
    description:
      "Removing technological barriers for growing enterprises with managed hosting, ready-to-deploy online commerce, and digital payment acceptance.",
    iconName: "Zap",
    keySolutions: ["E-Commerce Solutions", "Data Center & Hosting", "Sales Automation"],
  },
];
