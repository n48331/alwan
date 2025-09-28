import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Snackbar from "@/components/common/Snackbar";
import Head from "next/head";

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Alwan Manpower Solutions | HR Outsourcing & Staffing in Dubai",
  applicationName: "Alwan Manpower Solutions",
  description: "Trusted HR outsourcing and manpower staffing company in Dubai, UAE. Since 2021, Alwan Manpower Solutions connects businesses with skilled professionals across industries.",
  keywords: [
    "Manpower company in Dubai",
    "Staffing solutions in UAE",
    "HR outsourcing in Dubai",
    "Recruitment company in Dubai",
    "White-collar staffing UAE",
    "Trusted manpower agency Dubai",
    "Dubai HR outsourcing",
    "Payroll outsourcing UAE",
    "Recruitment outsourcing Dubai",
    "Employer of Record UAE",
    "PEO services Dubai",
    "Dubai staffing partner",
    "Manpower solutions UAE",
    "Alwan Manpower Solutions"
  ],
  generator: "alwan manpower, alwan manpower solutions, alwanmanpower.com, manpower company in dubai, staffing company in dubai, hr outsourcing uae",
  verification: {
    google: "OtwZgKCwDImgy8p-e3H1Ng7LphqOuHANBbSrCdF3Amg", // replace with your own if available
  },
  openGraph: {
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Alwan Manpower Solutions | HR Outsourcing & Staffing in Dubai</title>
        <meta key="desc" name="description" content="Trusted HR outsourcing and manpower staffing company in Dubai, UAE. Since 2021, Alwan Manpower Solutions connects businesses with skilled professionals across industries." />
        <meta property="og:description" content="Trusted HR outsourcing and manpower staffing company in Dubai, UAE. Since 2021, Alwan Manpower Solutions connects businesses with skilled professionals across industries." />
        <meta property="og:title" content="Alwan Manpower Solutions | HR Outsourcing & Staffing in Dubai" />
        <meta property="og:image" content="https://www.alwanmanpower.com/thumbnail.webp" />
        <meta property="og:url" content="https://www.alwanmanpower.com" />
        <meta property="og:site_name" content="Alwan Manpower Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Alwan Manpower Solutions" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="article:published_time" content="2021-01-01T09:00:00+00:00" />
        <meta property="article:modified_time" content="2025-01-01T09:00:00+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alwan Manpower Solutions | HR Outsourcing & Staffing in Dubai" />
        <meta name="twitter:description" content="Trusted HR outsourcing and manpower staffing company in Dubai, UAE." />
        <meta name="twitter:image" content="https://www.alwanmanpower.com/thumbnail.webp" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Alwan Manpower Solutions" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="5 minutes" />
        <meta name="referrer" content="origin" />
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://www.alwanmanpower.com" />
        <link rel="alternate" href="https://www.alwanmanpower.com" lang="en" />
        <link rel="alternate" href="https://www.alwanmanpower.com" lang="en-in" />
        <link rel="alternate" href="https://www.alwanmanpower.com" lang="x-default" />

        <link rel="shortcut icon" href="https://www.alwanmanpower.com/thumbnail.webp" />
        <meta key="gtag" name="google-site-verification" content="v9fzw6t6OLhitWcHDOK2PAZ1gL6piON6bmmgpq1" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.alwanmanpower.com",
              "name": "Alwan Manpower Solutions",
              "logo": "https://www.alwanmanpower.com/thumbnail.webp",
              "sameAs": [
                "https://www.facebook.com/alwanmanpower",
                "https://www.instagram.com/alwanmanpower",
                "https://www.linkedin.com/company/alwanmanpower",
                "mailto:info@alwanmanpower.com"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971 5xxxxxxx",
                "contactType": "Customer service"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "streetAddress": "Business Bay, Dubai, UAE"
              },
              "description": "Trusted HR outsourcing and manpower staffing company in Dubai, UAE. Since 2021, Alwan Manpower Solutions connects businesses with skilled professionals across industries."
            }
          `}
        </script>

        {/* Website Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.alwanmanpower.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.alwanmanpower.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>

        {/* WebPage Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.alwanmanpower.com",
              "name": "Alwan Manpower Solutions | HR Outsourcing & Staffing in Dubai",
              "description": "Trusted HR outsourcing and manpower staffing company in Dubai, UAE."
            }
          `}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.alwanmanpower.com"
                }
              ]
            }
          `}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Alwan Manpower Solutions",
              "image": "https://www.alwanmanpower.com/thumbnail.webp",
              "url": "https://www.alwanmanpower.com",
              "telephone": "+971 5xxxxxxx",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Business Bay, Dubai, UAE",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "United Arab Emirates"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "currenciesAccepted": "AED",
              "paymentAccepted": "Bank Transfer, Cash, Credit Card",
              "priceRange": "$$",
              "description": "Trusted HR outsourcing and manpower staffing company in Dubai, UAE."
            }
          `}
        </script>
      </Head>
      <body className="antialiased font-openSans">
        <Snackbar />
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="" />
    </html>
  );
}
