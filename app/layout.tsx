import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Webio — Premium Web Development Agency | Jaipur, India",
  description: "Webio builds fast, beautiful, and scalable websites for businesses. From business websites to custom web apps — we craft digital experiences that drive growth.",
  metadataBase: new URL("https://www.webio.co.in"),
  alternates: {
    canonical: "https://www.webio.co.in",
  },
  openGraph: {
    title: "Webio — Premium Web Development Agency",
    description: "Webio builds fast, beautiful, and scalable websites for businesses. From business websites to custom web apps — we craft digital experiences that drive growth.",
    url: "https://www.webio.co.in",
    siteName: "Webio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webio Web Development Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webio — Premium Web Development Agency",
    description: "Webio builds fast, beautiful, and scalable websites for businesses.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Webio",
              "image": "https://www.webio.co.in/og-image.png",
              "@id": "https://www.webio.co.in/#localbusiness",
              "url": "https://www.webio.co.in",
              "telephone": "+919351864351",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jaipur",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.9124,
                "longitude": 75.7873
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a website cost in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Webio builds premium, fully responsive websites for ₹9,990 one-time. No monthly fees, no hidden charges. The price includes design, development, and free SEO setup."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is included in the ₹9,990 plan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You get a custom-designed, mobile-responsive website built on Next.js, on-page SEO setup, WhatsApp CTA integration, and one round of revisions — all for ₹9,990."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you charge extra for SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. SEO setup is included in the ₹9,990 package at no extra cost. This includes meta title and description optimisation, FAQ schema, image alt tags, sitemap, and Google Search Console submission."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a monthly fee after the one-time payment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No recurring or monthly fees. You pay ₹9,990 once and own the website."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} font-sans bg-altrix-dark text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
