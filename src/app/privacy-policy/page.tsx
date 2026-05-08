import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how WBI, operated by Samvan Tech, collects, uses, and safeguards your personal information.",
};

const sections: LegalSection[] = [
  {
    number: "1",
    title: "Information We Collect",
    body: "We may collect the following information:",
    items: [
      "Business information provided during account registration",
      "Contact information including names, email addresses, and phone numbers",
      "WhatsApp messaging metadata and communication details",
      "Usage analytics and platform activity",
      "Technical information such as IP address, browser type, and device information",
    ],
  },
  {
    number: "2",
    title: "How We Use Information",
    body: "We use collected information to:",
    items: [
      "Provide and improve our services",
      "Enable WhatsApp communication functionality",
      "Manage customer accounts and support requests",
      "Monitor platform performance and security",
      "Comply with legal obligations",
    ],
  },
  {
    number: "3",
    title: "WhatsApp Platform Data",
    body: "WBI uses WhatsApp Business Platform APIs to enable messaging functionality for businesses. Platform data is used solely for providing requested communication services and is not sold to third parties.",
  },
  {
    number: "4",
    title: "Data Security",
    body: "We implement reasonable administrative, technical, and organizational safeguards to protect user information against unauthorized access, disclosure, or misuse.",
  },
  {
    number: "5",
    title: "Data Sharing",
    body: "We do not sell personal information. Data may be shared only with trusted service providers or when legally required.",
  },
  {
    number: "6",
    title: "Data Retention",
    body: "We retain information only for as long as necessary to provide services, comply with legal obligations, and resolve disputes.",
  },
  {
    number: "7",
    title: "User Rights",
    body: "Users may request access, correction, or deletion of their information by contacting us.",
  },
  {
    number: "8",
    title: "Third-Party Services",
    body: "Our platform may integrate with third-party services including Meta and WhatsApp APIs. Use of those services is subject to their respective policies.",
  },
  {
    number: "9",
    title: "Updates to This Policy",
    body: "We may update this Privacy Policy periodically. Continued use of the platform constitutes acceptance of the updated policy.",
  },
  {
    number: "10",
    title: "Contact Us",
    body: "Samvan Tech — Website: https://samvan-tech.in — Email: support@samvan-tech.in",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Privacy Policy"
      lastUpdated="May 2026"
      intro='WBI ("we", "our", or "us"), operated by Samvan Tech, respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you use our platform and services.'
      sections={sections}
    />
  );
}
