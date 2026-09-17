export interface EcosystemLayer {
  level: string;
  title: string;
  subtitle: string;
  components: string[];
  description: string;
}

export const ecosystemLayers: EcosystemLayer[] = [
  {
    level: "Layer 01",
    title: "Physical & Network Infrastructure",
    subtitle: "Carrier-neutral fiber, redundant power, and Tier-grade data center facilities",
    components: ["Data Center Facilities", "Carrier-Neutral Fiber", "Redundant Power (N+1)", "Substation Backups"],
    description: "The resilient physical foundation hosted at the Ethiopian IT Park hub.",
  },
  {
    level: "Layer 02",
    title: "Cloud & Virtualization Layer",
    subtitle: "Software-defined compute, distributed block storage, and localized private clouds",
    components: ["Hyperconverged Compute", "Virtual Private Clouds", "Block & Object Storage", "Perimeter Firewalls"],
    description: "Elastic, secure computing resources keeping data sovereign and low-latency.",
  },
  {
    level: "Layer 03",
    title: "Transactional & Core Platforms",
    subtitle: "High-throughput financial switches, payment gateways, and carrier routing engines",
    components: ["Payment Gateway Core", "BGP Routing & VISP Core", "Double-Entry Ledgers", "API Gateways"],
    description: "Mission-critical transaction backbones processing real-time enterprise demands.",
  },
  {
    level: "Layer 04",
    title: "Enterprise Digital Applications",
    subtitle: "Omnichannel commerce engines, customer portals, and branch service frontends",
    components: ["E-Commerce Marketplace", "Customer Portals", "Mobile Banking Interfaces", "Merchant Dashboards"],
    description: "Intuitive, high-converting digital touchpoints for customers and vendors.",
  },
  {
    level: "Layer 05",
    title: "Intelligent Automation & ERP Integration",
    subtitle: "Field sales automation, continuous data sync, and enterprise pipeline telemetry",
    components: ["Field Sales Sync", "ERP & CNET Connectors", "Automated Quoting", "Real-Time Telemetry"],
    description: "Eliminating manual bottlenecks and synchronizing enterprise business logic.",
  },
  {
    level: "Layer 06",
    title: "Enterprise Business Value",
    subtitle: "Accelerated efficiency, regional expansion, and verified digital transformation",
    components: ["Revenue Growth", "Operational Resiliency", "Regulatory Compliance", "Strategic Agility"],
    description: "The ultimate transformation outcome for our enterprise partners.",
  },
];
