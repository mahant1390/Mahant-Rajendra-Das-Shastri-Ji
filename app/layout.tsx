import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'कालसर्प दोष पूजा उज्जैन | Kaal Sarp Dosh Puja in Ujjain - Mahant Rajendra Das Shastri Ji',
  description: 'उज्जैन में प्रामाणिक कालसर्प दोष निवारण पूजा के लिए महंत राजेंद्र दास शास्त्री जी से संपर्क करें। 20+ वर्षों का अनुभव, 11000+ पूजाएं। Authentic Kaal Sarp Dosh Nivaran Puja in Ujjain by Mahant Rajendra Das Shastri Ji with 20+ years experience.',
  keywords: ['कालसर्प दोष पूजा', 'kaal sarp dosh puja', 'उज्जैन कालसर्प पूजा', 'ujjain kaal sarp puja', 'महंत राजेंद्र दास शास्त्री', 'mahant rajendra das shastri', 'कालसर्प दोष निवारण', 'kaal sarp dosh nivaran', 'वैदिक अनुष्ठान उज्जैन', 'vedic rituals ujjain', 'ऑनलाइन पूजा सेवा', 'online puja service'],
  authors: [{ name: 'Mahant Rajendra Das Shastri Ji' }],
  creator: 'Mahant Rajendra Das Shastri Ji',
  publisher: 'Mahant Rajendra Das Shastri Ji',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://kalsarppoojaujjain.in',
  },
  openGraph: {
    title: 'कालसर्प दोष पूजा उज्जैन | Kaal Sarp Dosh Puja in Ujjain',
    description: 'उज्जैन में प्रामाणिक कालसर्प दोष निवारण पूजा के लिए महंत राजेंद्र दास शास्त्री जी से संपर्क करें। 20+ वर्षों का अनुभव, 11000+ पूजाएं। Authentic Kaal Sarp Dosh Nivaran Puja in Ujjain.',
    url: 'https://kalsarppoojaujjain.in',
    siteName: 'कालसर्प दोष पूजा उज्जैन',
    images: [
      {
        url: 'https://kalsarppoojaujjain.in/mahant-rajendra-das-shastri.jpg',
        width: 800,
        height: 600,
        alt: 'Mahant Rajendra Das Shastri Ji',
      },
    ],
    locale: 'hi_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'कालसर्प दोष पूजा उज्जैन | Kaal Sarp Dosh Puja in Ujjain',
    description: 'उज्जैन में प्रामाणिक कालसर्प दोष निवारण पूजा के लिए महंत राजेंद्र दास शास्त्री जी से संपर्क करें। Authentic Kaal Sarp Dosh Nivaran Puja in Ujjain.',
    images: ['https://kalsarppoojaujjain.in/mahant-rajendra-das-shastri.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-verification-code',
  },
  category: 'Spiritual Services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "कालसर्प दोष पूजा उज्जैन - महंत राजेंद्र दास शास्त्री जी",
              "image": "https://kalsarppoojaujjain.in/mahant-rajendra-das-shastri.jpg",
              "@id": "https://kalsarppoojaujjain.in",
              "url": "https://kalsarppoojaujjain.in",
              "telephone": "+919243011008",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Address",
                "addressLocality": "Ujjain",
                "postalCode": "456001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.1765, // Replace with actual coordinates
                "longitude": 75.7885 // Replace with actual coordinates
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/",
                "https://www.instagram.com/yourpage"
              ] 
            })
          }}
        />
        {/* Structured data for service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Kaal Sarp Dosh Puja",
              "provider": {
                "@type": "Person",
                "name": "Mahant Rajendra Das Shastri Ji",
                "description": "Experienced Vedic scholar with over 20 years of expertise in performing Kaal Sarp Dosh Puja"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "description": "Authentic Kaal Sarp Dosh Nivaran Puja services in Ujjain with online booking and live streaming options",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "INR"
                }
              }
            })
          }}
        />
        {/* Hreflang tags for language variants */}
        <link rel="alternate" hrefLang="en" href="https://kalsarppoojaujjain.in/en" />
        <link rel="alternate" hrefLang="hi" href="https://kalsarppoojaujjain.in" />
      </head>
      <body>{children}</body>
    </html>
  )
}
