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
  metadataBase: new URL("https://webio.agency"),
  openGraph: {
    title: "Webio — Premium Web Development Agency",
    description: "Webio builds fast, beautiful, and scalable websites for businesses. From business websites to custom web apps — we craft digital experiences that drive growth.",
    url: "https://webio.agency",
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
              "image": "https://webio.agency/og-image.png",
              "@id": "https://webio.agency/#localbusiness",
              "url": "https://webio.agency",
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
      </head>
      <body
        className={`${inter.variable} ${syne.variable} font-sans bg-altrix-dark text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
