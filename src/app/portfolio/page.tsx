import type { Metadata } from "next";
import { PortfolioView } from "@/components/portfolio/portfolio-view";

export const metadata: Metadata = {
  title: "CrazyTech Enterprises — High-Impact Software, Mobile Apps & Scalable Web Platforms",
  description:
    "Official portfolio of CrazyTech Enterprises. High-performance software development, native iOS & Android mobile apps, telecom automation gateways, and enterprise cloud suites.",
  keywords: [
    "Software Development Ghana",
    "Mobile App Development iOS Android",
    "CrazyTech Enterprises",
    "Custom ERP Systems",
    "FinTech Telecom Gateway",
    "Paystack Mobile Money Integration",
    "Next.js React Native Flutter",
    "VPS Nginx Cloud Architecture",
  ],
  openGraph: {
    title: "CrazyTech Enterprises — High-Impact Software Engineering Portfolio",
    description:
      "Explore 4 high-caliber production templates, live interactive mockups, project cost estimator, and full-stack software development services.",
    url: "https://portfolio.crazytechent.com",
    siteName: "CrazyTech Enterprises",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrazyTech Enterprises — Software & App Development Portfolio",
    description:
      "High-impact software engineering, mobile apps, telecom automation, and enterprise cloud platforms.",
  },
  alternates: {
    canonical: "https://portfolio.crazytechent.com",
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CrazyTech Enterprises",
    image: "https://portfolio.crazytechent.com/icon.png",
    "@id": "https://portfolio.crazytechent.com",
    url: "https://portfolio.crazytechent.com",
    telephone: "+233507904981",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Accra",
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
      addressCountry: "GH",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: ["https://crazytechent.com"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioView />
    </>
  );
}
