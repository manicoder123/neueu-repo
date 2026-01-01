import { Urbanist } from "next/font/google";
import "./globals.css";
import LayoutLoading from "./loading";
import Script from "next/script";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neu Eu Terms & Conditions for Medical Weight Loss Services",
  description:
    "A prescribed, medication-assisted weight loss program designed to deliver real results with medical guidance, safety, and long-term success.",
};
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neu Eu Medical",
  url: "https://www.neueu.co/",
  logo: "https://www.neueu.co/images/logo.svg",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61566649072474&mibextid=wwXIfr&rdid=OVrmXSbYKrpxHm5A&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BTkikvoWx%2F%3Fmibextid%3DwwXIfr",
    "https://www.instagram.com/neueumedical",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="iuvM6l1f00uBH5wv_P8QVpKIUHG-Tzqo1urz8KJv4I8"
        />
        {/* You can also inject JSON-LD schema here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
            <script
      dangerouslySetInnerHTML={{
        __html: `
          (function (w, d, s, u, dbg) {
            var js, fjs = d.getElementsByTagName(s)[0];
            window.rdcndbg = dbg;
            js = d.createElement(s);
            js.async = true;
            js.src = u;
            fjs.parentNode.insertBefore(js, fjs);
          })(window, document, 'script', 'https://rdcdn.com/rtjs?aid=30838', false);
        `,
      }}
    />
      </head>
      <body className={`${urbanist.className} antialiased `}>
        <LayoutLoading />
        {children}
        <Script
          src="https://mm-uxrv.com/js/mm_56326c4a-dcd5-41b9-8b20-91e262028e81-32104087.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
