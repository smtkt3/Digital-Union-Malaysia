import type { Metadata } from "next";
import "./globals.css";
import "./mobile-overrides.css";
import { JsonLd, organisation, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Digital Union Malaysia | Technology, AI & Global Trade",
    template: "%s | Digital Union Malaysia"
  },
  description: "Digital Union Malaysia delivers custom software, AI automation, cloud engineering, data intelligence, technology advisory and global trade services.",
  applicationName: "Digital Union Malaysia",
  authors: [{ name: "Digital Union Malaysia", url: siteUrl }],
  creator: "Digital Union Malaysia",
  publisher: "Digital Union Malaysia",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteUrl,
    siteName: "Digital Union Malaysia",
    title: "Digital Union Malaysia | Technology, AI & Global Trade",
    description: "Technology, AI, software, cloud, data and global trade expertise for ambitious organisations."
  },
  twitter: {
    card: "summary",
    title: "Digital Union Malaysia | Technology, AI & Global Trade",
    description: "Technology, AI, software, cloud, data and global trade expertise for ambitious organisations."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={{ "@context": "https://schema.org", ...organisation }} />
        {children}
        <a
          className="whatsapp-float"
          href="https://wa.me/60146629384?text=Hello%20Digital%20Union%20Malaysia%2C%20I%27d%20like%20to%20start%20a%20conversation."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Digital Union Malaysia on WhatsApp"
        >
          <span className="whatsapp-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" role="img">
              <path d="M16 3.25A12.75 12.75 0 0 0 5.11 22.64L3.5 28.5l6-1.57A12.75 12.75 0 1 0 16 3.25Z" />
              <path className="whatsapp-phone" d="M12.25 9.45c-.3-.67-.61-.68-.9-.7h-.77c-.27 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.34 0 1.97 1.43 3.87 1.63 4.14.2.26 2.82 4.3 6.83 6.03.95.41 1.7.66 2.28.84.96.3 1.83.26 2.52.16.77-.11 2.36-.97 2.7-1.9.33-.94.33-1.74.23-1.91-.1-.17-.37-.27-.77-.47-.4-.2-2.36-1.16-2.73-1.3-.36-.14-.63-.2-.9.2-.26.4-1.03 1.3-1.26 1.57-.23.27-.47.3-.87.1-.4-.2-1.69-.62-3.21-1.98a12.02 12.02 0 0 1-2.22-2.76c-.23-.4-.02-.62.18-.82.18-.18.4-.47.6-.7.2-.23.26-.4.4-.67.13-.27.06-.5-.04-.7-.1-.2-.88-2.18-1.22-2.97Z" />
            </svg>
          </span>
        </a>
      </body>
    </html>
  );
}
