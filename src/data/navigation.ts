export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description: string;
    iconName?: string;
  }[];
}

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    description: "Our history, mission, leadership, and digital vision.",
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Enterprise ICT and digital infrastructure services.",
    children: [
      {
        label: "Data Center & Hosting",
        href: "/solutions/data-center-hosting",
        description: "Enterprise colocation, private cloud, and high-availability hosting.",
        iconName: "Server",
      },
      {
        label: "E-Commerce",
        href: "/solutions/ecommerce",
        description: "Scalable digital retail and multi-vendor platform architectures.",
        iconName: "ShoppingBag",
      },
      {
        label: "Financial Technology",
        href: "/solutions/fintech",
        description: "Secure payment switches, wallets, and financial transactional core.",
        iconName: "CreditCard",
      },
      {
        label: "VISP",
        href: "/solutions/visp",
        description: "Virtual ISP bandwidth distribution, SD-WAN, and branch networking.",
        iconName: "Radio",
      },
      {
        label: "Sales Automation",
        href: "/solutions/sales-automation",
        description: "Intelligent CRM, sales pipeline, and ERP enterprise integration.",
        iconName: "Workflow",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    description: "Proprietary software platforms and enterprise tooling.",
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Tailored sector technology solutions across African markets.",
  },
  {
    label: "Partners",
    href: "/partners",
    description: "Technology alliances, network carriers, and integration partners.",
  },
  {
    label: "Insights",
    href: "/insights",
    description: "Industry analyses, technology updates, and corporate news.",
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Join our engineering, product, and infrastructure teams.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Connect with our enterprise engineering and advisory teams.",
  },
];
