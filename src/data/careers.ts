export interface CareerDepartment {
  name: string;
  description: string;
}

export const careerDepartments: CareerDepartment[] = [
  { name: "Cloud Infrastructure & Systems Engineering", description: "Data center operations, Linux administration, virtualization, and network architecture." },
  { name: "Software & Platform Engineering", description: "Full-stack development, distributed microservices, FinTech switch architecture, and mobile apps." },
  { name: "Telecommunications & VISP Network Operations", description: "BGP routing, optical transport, NOC surveillance, and SD-WAN management." },
  { name: "Enterprise Solutions & Client Technical Architecture", description: "ERP implementation, presales consulting, enterprise client onboarding, and support." },
];

export const openVacanciesNotice = {
  headline: "Build Africa's Digital Infrastructure With Us",
  description:
    "We are constantly looking for talented systems engineers, network architects, platform developers, and enterprise specialists committed to transforming the regional technology landscape.",
  statusMessage: "Open positions will be published here as active recruitment campaigns launch.",
  inquiryEmail: "admin@redcloud.com.et",
};
