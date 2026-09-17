export interface ProductItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  capabilities: string[];
  statusText: string;
  isPendingOfficialRelease?: boolean;
}

export const productsData: ProductItem[] = [
  {
    id: "cloud-core",
    name: "Red Cloud Virtual Infrastructure Suite",
    category: "Cloud Infrastructure",
    badge: "Enterprise Core",
    description:
      "A centralized cloud orchestration portal enabling rapid provisioning of virtual private servers, distributed storage pools, and network firewall policies.",
    capabilities: [
      "Dynamic resource scaling on demand",
      "Automated snapshot and disaster restore",
      "Localized latency monitoring console",
      "Role-based access security controls",
    ],
    statusText: "[Infrastructure specifications configured per enterprise client contract]",
  },
  {
    id: "fin-switch",
    name: "Red Financial Switch & Gateway Core",
    category: "FinTech & Payments",
    badge: "Financial Core",
    description:
      "Enterprise routing engine facilitating real-time transactional clearing between core banking platforms, mobile money operators, and merchant point-of-sale systems.",
    capabilities: [
      "Sub-second settlement confirmation",
      "High-concurrency thread allocation",
      "Tamper-proof ledger integrity",
      "National payment switch interoperability",
    ],
    statusText: "[Deployment architecture subject to regulatory clearance]",
  },
  {
    id: "commerce-hub",
    name: "Enterprise Digital Commerce Engine",
    category: "Commerce & Retail",
    badge: "Omnichannel Platform",
    description:
      "Turnkey multi-vendor marketplace software with integrated domestic payment endpoints, dynamic dispatch delivery routing, and B2B wholesale order management.",
    capabilities: [
      "Modular catalog and cart microservices",
      "Real-time courier dispatch webhooks",
      "Multi-currency domestic settlement",
      "Comprehensive merchant portal dashboards",
    ],
    statusText: "[Public platform references like Hulubeje featured upon official publication]",
    isPendingOfficialRelease: true,
  },
  {
    id: "sales-flow",
    name: "Red Sales & Field Automation Platform",
    category: "Business Automation",
    badge: "Productivity",
    description:
      "Field rep mobile automation tool paired with a management operations console for synchronized sales route scheduling, stock-on-hand tracking, and automated invoicing.",
    capabilities: [
      "Offline-first mobile order capture",
      "GPS route verification and visit logs",
      "Automated ERP inventory deduction",
      "Instant printable customer receipts",
    ],
    statusText: "[ERP and CNET connectors integrated to customer specification]",
  },
];
