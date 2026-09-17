export interface CaseStudyItem {
  id: string;
  title: string;
  industry: string;
  isComingSoon: boolean;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "cs-infrastructure-modernization",
    title: "Financial Sector Core Infrastructure Migration",
    industry: "Banking & Microfinance",
    isComingSoon: true,
    summary:
      "Enterprise migration of mission-critical database workloads to sovereign local cloud hosting.",
    problem:
      "Latency and forex costs associated with international cloud hosting, combined with compliance requirements for domestic data residency.",
    solution:
      "Dedicated high-availability private cloud instances deployed inside Ethiopian IT Park with redundant failover.",
    impact:
      "Detailed operational metrics and verified outcomes will be published upon authorized client case release.",
    technologies: ["Data Center & Hosting", "Virtual Private Cloud", "Network Redundancy"],
  },
  {
    id: "cs-omnichannel-retail",
    title: "National Distribution & Field Sales Automation",
    industry: "FMCG & Retail",
    isComingSoon: true,
    summary:
      "Equipping hundreds of field sales agents with real-time mobile order capture and automated inventory sync.",
    problem:
      "Paper-based order processing causing reconciliation delays, stock mismatches, and multi-day delivery turnaround.",
    solution:
      "Offline-capable mobile sales automation application integrated with central ERP and warehouse databases.",
    impact:
      "Documented performance benchmarks and efficiency studies will be shared upon official client review.",
    technologies: ["Sales Automation", "ERP Sync", "Mobile Field App"],
  },
];
