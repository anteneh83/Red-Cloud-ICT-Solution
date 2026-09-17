export interface Solution {
  id: string;
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  description: string;
  iconName: string;
  features: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  architecturePoints: string[];
  useCases: string[];
  specsStatusText: string;
}

export const solutionsData: Solution[] = [
  {
    id: "data-center-hosting",
    slug: "data-center-hosting",
    index: "01",
    title: "Data Center & Hosting",
    shortTitle: "Data Center",
    category: "Infrastructure & Cloud",
    summary:
      "Enterprise hosting, private cloud clusters, and mission-critical server environments stationed within secure data center facilities.",
    description:
      "Red Cloud delivers scalable cloud infrastructure, colocation, and managed hosting solutions built for high reliability, minimal latency, and robust local data residency compliance.",
    iconName: "Server",
    features: [
      "High Availability Architecture",
      "Tier-Grade Hosting Environments",
      "Localized Data Residency & Sovereignty",
      "Scalable Virtual & Dedicated Compute",
      "Proactive 24/7 Enterprise Monitoring",
    ],
    capabilities: [
      {
        title: "Managed Cloud Compute & Storage",
        description:
          "High-throughput enterprise compute instances, block storage, and automated snapshot management designed for dynamic business workloads.",
      },
      {
        title: "Secure Colocation & Rack Space",
        description:
          "Redundant power distribution, precision climate conditioning, and physical security protocols situated at the Ethiopian IT Park hub.",
      },
      {
        title: "Disaster Recovery & Business Continuity",
        description:
          "Automated backup replication, failover routing, and rapid recovery points ensuring continuous service accessibility.",
      },
    ],
    benefits: [
      {
        title: "Low Latency Local Access",
        description:
          "Domestic traffic routes locally without unnecessary international transits, ensuring responsive end-user experiences.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Strict adherence to domestic data preservation and banking/enterprise governance guidelines.",
      },
      {
        title: "Predictable Operational Costs",
        description:
          "Eliminate forex volatility in infrastructure overhead through domestic cloud service commitments.",
      },
    ],
    architecturePoints: [
      "N+1 redundant power arrays & uninterrupted battery topology",
      "Carrier-neutral fiber backbone termination",
      "Automated threat detection & network perimeter firewalls",
      "Multi-tenant isolation and dedicated hardware virtualization",
    ],
    useCases: [
      "Core Banking & Microfinance Database Hosting",
      "Mission-Critical ERP & CRM Deployments",
      "Governmental Portals & Public Sector Registries",
      "High-Traffic E-Commerce Workloads",
    ],
    specsStatusText:
      "Detailed technical facility certifications and capacity specifications to be officially updated as expansion phases activate.",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    index: "02",
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce",
    category: "Digital Platforms",
    summary:
      "Omnichannel retail engines, scalable multi-vendor marketplaces, and seamless digital transaction pipelines for modern commerce.",
    description:
      "Modernize commerce operations with resilient storefront architectures, automated inventory synchronizations, and built-in regional payment channel gateways.",
    iconName: "ShoppingBag",
    features: [
      "Headless & Modular Storefronts",
      "Integrated Domestic Payment Workflows",
      "Real-Time Inventory & Order Tracking",
      "B2B & B2C Merchant Portals",
      "Mobile-First Responsive Commerce",
    ],
    capabilities: [
      {
        title: "Multi-Tier Merchant Management",
        description:
          "Configurable vendor onboarding, automated commission settlements, and granular product catalog hierarchies.",
      },
      {
        title: "Fulfillment & Logistics Integration",
        description:
          "API connectors for delivery tracking, dispatch routing, warehouse status updates, and digital proof-of-delivery.",
      },
      {
        title: "Omnichannel Customer Experience",
        description:
          "Consistent pricing, cart persistence, and customer account profiles across web, mobile apps, and in-person retail points.",
      },
    ],
    benefits: [
      {
        title: "Accelerated Time to Market",
        description:
          "Deploy turnkey digital shopping portals with localized language, currency, and payment integrations.",
      },
      {
        title: "High Conversion Workflows",
        description:
          "Optimized checkout steps tuned to domestic user behavior and mobile broadband realities.",
      },
      {
        title: "Operational Visibility",
        description:
          "Unified reporting dashboards analyzing inventory turnover, sales velocity, and customer retention metrics.",
      },
    ],
    architecturePoints: [
      "Microservices architecture for decoupled catalog and checkout services",
      "Distributed cache layers for sub-second product search performance",
      "Idempotent order processing engine preventing duplicate transactions",
      "Webhook architecture for real-time ERP and courier updates",
    ],
    useCases: [
      "National Retail Chains & Department Stores",
      "Agricultural & Commodity Producer Marketplaces",
      "Fast-Moving Consumer Goods (FMCG) B2B Ordering",
      "Digital Service & Subscription Ticketing",
    ],
    specsStatusText:
      "Commerce engine integrations and proprietary platform references (such as Hulubeje) subject to formal corporate deployment releases.",
  },
  {
    id: "fintech",
    slug: "fintech",
    index: "03",
    title: "Financial Technology | FinTech",
    shortTitle: "FinTech",
    category: "Financial Systems",
    summary:
      "High-concurrency payment switches, wallet infrastructure, and secure transaction systems engineered for banks, MFIs, and digital lenders.",
    description:
      "Red Cloud builds institutional-grade financial infrastructure that connects payment ecosystems, facilitates real-time clearing, and guarantees auditability.",
    iconName: "CreditCard",
    features: [
      "Payment Gateway & Switch Integration",
      "Mobile Wallet & Agent Banking Foundations",
      "Interoperable Transaction Routing",
      "End-to-End Ledger Encryption & Auditing",
      "Fraud Detection & Risk Rule Engines",
    ],
    capabilities: [
      {
        title: "Unified Transaction Orchestration",
        description:
          "Single API integration to bridge domestic mobile money platforms, national switches, card processors, and banking APIs.",
      },
      {
        title: "Digital Wallet Core & Ledger",
        description:
          "Double-entry bookkeeping engines with sub-millisecond settlement validation, balance checks, and reconciliation exports.",
      },
      {
        title: "Compliance & Audit Readiness",
        description:
          "Granular cryptographic event logging, tamper-evident logs, and regulatory telemetry modules.",
      },
    ],
    benefits: [
      {
        title: "Institutional Reliability",
        description:
          "Built to handle high transaction concurrency during salary days, holiday spikes, and festival market peaks.",
      },
      {
        title: "Zero Ledger Inconsistency",
        description:
          "Strict ACID database transactional isolation guaranteeing balance accuracy across distributed services.",
      },
      {
        title: "Frictionless Onboarding",
        description:
          "Standardized developer SDKs and RESTful endpoints accelerating partner institution integrations.",
      },
    ],
    architecturePoints: [
      "Hardware security module (HSM) ready encryption standards",
      "Distributed consensus ledgers with automated reconciliation runs",
      "Rate limiting, signature validation, and replay attack prevention",
      "Air-gapped key management and granular role access controls",
    ],
    useCases: [
      "Commercial Banks & Cooperative Unions",
      "Microfinance Institutions (MFIs) & SACCOs",
      "Utility & Government Bill Aggregation",
      "Cross-Border Remittance Termination",
    ],
    specsStatusText:
      "FinTech architectural implementations operate in full alignment with national monetary directives and regulatory frameworks.",
  },
  {
    id: "visp",
    slug: "visp",
    index: "04",
    title: "Virtual Internet Service Provider | VISP",
    shortTitle: "VISP",
    category: "Telecommunications & Networking",
    summary:
      "Enterprise bandwidth aggregation, virtual ISP distribution, and managed connectivity solutions for multi-branch organizations.",
    description:
      "Empower your enterprise with dedicated, monitored, and resilient broadband pipelines, SD-WAN interconnectivity, and guaranteed throughput.",
    iconName: "Radio",
    features: [
      "Dedicated Enterprise Bandwidth",
      "Virtual ISP Network Orchestration",
      "Multi-Branch SD-WAN Management",
      "Bandwidth Shaping & Traffic Prioritization",
      "Active Link Redundancy & Automated Failover",
    ],
    capabilities: [
      {
        title: "Carrier-Grade Traffic Management",
        description:
          "Dynamic QoS policies prioritizing mission-critical ERP, voice over IP (VoIP), and financial transaction packets over bulk traffic.",
      },
      {
        title: "Virtual Network Slicing",
        description:
          "Provision isolated virtual tenant networks with custom routing rules, firewall policies, and utilization quotas.",
      },
      {
        title: "Centralized Remote Monitoring (NOC)",
        description:
          "Continuous latency tracking, packet loss detection, and automated alerting on branch link degradations.",
      },
    ],
    benefits: [
      {
        title: "Guaranteed SLA Uptime",
        description:
          "Engineered for enterprise continuity with multi-path failover across primary and backup circuits.",
      },
      {
        title: "Branch Network Simplification",
        description:
          "Centralized network policy management eliminates the need for expensive on-site networking staff at branch offices.",
      },
      {
        title: "Local Traffic Optimization",
        description:
          "Direct peering with domestic hubs for lightning-fast internal communication.",
      },
    ],
    architecturePoints: [
      "BGP peering protocols with automated routing convergence",
      "Hardware-accelerated encryption tunnels for inter-office WAN traffic",
      "Deep packet inspection (DPI) for enterprise threat mitigation",
      "Real-time SNMP and NetFlow telemetry ingestion",
    ],
    useCases: [
      "Nationwide Bank Branch Interconnectivity",
      "Large Educational Campuses & Research Institutes",
      "Industrial Parks & Manufacturing Facilities",
      "Enterprise Headquarters & Data Center Interconnect",
    ],
    specsStatusText:
      "Network coverage maps, upstream peering specifications, and regional footprint are deployed under prevailing telecommunications licensing.",
  },
  {
    id: "sales-automation",
    slug: "sales-automation",
    index: "05",
    title: "Sales Automation",
    shortTitle: "Sales Automation",
    category: "Enterprise Systems",
    summary:
      "Intelligent CRM, sales pipeline orchestration, field sales tracking, and automated enterprise transaction synchronization.",
    description:
      "Streamline sales operations from prospect capture to final invoice settlement with intelligent workflows that boost team productivity and eliminate operational friction.",
    iconName: "Workflow",
    features: [
      "End-to-End Opportunity Pipelines",
      "Field Sales & Order Automation",
      "ERP Integration & Invoice Sync",
      "Real-Time Sales Telemetry & Dashboards",
      "Automated Quotation & Contract Workflows",
    ],
    capabilities: [
      {
        title: "Field Force Tracking & Van Sales",
        description:
          "Mobile-enabled order taking, route optimization, stock-on-hand tracking, and digital receipt generation for distributed sales teams.",
      },
      {
        title: "Enterprise ERP & Inventory Sync",
        description:
          "Automatic verification of warehouse stock availability and price tier rules before order confirmation.",
      },
      {
        title: "Sales Analytics & Forecasting",
        description:
          "Predictive pipeline models, quota tracking, rep performance scorecards, and revenue variance analysis.",
      },
    ],
    benefits: [
      {
        title: "Zero Lost Inquiries",
        description:
          "Every lead is automatically routed, tracked, and alerted until qualification and formal closure.",
      },
      {
        title: "Shortened Deal Cycles",
        description:
          "Instantly generate approved quotes and proposals directly from mobile or desktop terminals.",
      },
      {
        title: "Accurate Inventory Allocation",
        description:
          "Prevent stock overselling through synchronized inventory reservations upon deal signing.",
      },
    ],
    architecturePoints: [
      "Offline-first mobile client architecture with background sync",
      "Event-driven workflow triggers via asynchronous message queues",
      "Role-based permission matrices (Sales Rep, Territory Lead, VP, Auditor)",
      "Secure REST and GraphQL connectors for legacy ERP suites",
    ],
    useCases: [
      "FMCG Distributors & Wholesalers",
      "Pharmaceutical Sales Rep Operations",
      "Industrial Equipment B2B Sales Teams",
      "Corporate Telecom & Utility Service Subscriptions",
    ],
    specsStatusText:
      "Custom enterprise connectors (including CNET and major regional ERP systems) configured to client specification.",
  },
];
