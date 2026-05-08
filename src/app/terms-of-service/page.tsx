import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for WBI, operated by Samvan Tech. By using our platform, you agree to these terms.",
};

const sections: LegalSection[] = [
  {
    number: "1",
    title: "Acceptance of Terms",
    body: "By using WBI, you confirm that you are authorized to represent your business and agree to comply with these terms.",
  },
  {
    number: "2",
    title: "Services Provided",
    body: "WBI provides businesses with tools and services for customer communication, messaging automation, notifications, and WhatsApp Business Platform integrations.",
  },
  {
    number: "3",
    title: "User Responsibilities",
    body: "Users agree to:",
    items: [
      "Provide accurate business information",
      "Use the platform lawfully and responsibly",
      "Comply with WhatsApp and Meta platform policies",
      "Avoid sending spam, abusive, or unauthorized messages",
    ],
  },
  {
    number: "4",
    title: "Account Security",
    body: "Users are responsible for maintaining the confidentiality of their account credentials and activities performed through their accounts.",
  },
  {
    number: "5",
    title: "Platform Availability",
    body: "We strive to maintain reliable service but do not guarantee uninterrupted or error-free availability.",
  },
  {
    number: "6",
    title: "Prohibited Activities",
    body: "Users must not:",
    items: [
      "Use the platform for illegal activities",
      "Violate messaging regulations or privacy laws",
      "Attempt unauthorized access to systems or data",
      "Interfere with platform operations",
    ],
  },
  {
    number: "7",
    title: "Intellectual Property",
    body: "All platform software, branding, and content are the property of Samvan Tech unless otherwise stated.",
  },
  {
    number: "8",
    title: "Limitation of Liability",
    body: "Samvan Tech shall not be liable for indirect, incidental, or consequential damages arising from use of the platform.",
  },
  {
    number: "9",
    title: "Termination",
    body: "We reserve the right to suspend or terminate accounts that violate these terms or applicable policies.",
  },
  {
    number: "10",
    title: "Changes to Terms",
    body: "We may modify these Terms of Service at any time. Continued use of the platform indicates acceptance of updated terms.",
  },
  {
    number: "11",
    title: "Contact Information",
    body: "Samvan Tech — Website: https://samvan-tech.in — Email: support@samvan-tech.in",
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Terms of Service"
      lastUpdated="May 2026"
      intro="Welcome to WBI, operated by Samvan Tech. By accessing or using our platform, you agree to the following Terms of Service."
      sections={sections}
    />
  );
}
