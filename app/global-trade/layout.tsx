import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Trade & Advisory | Digital Union Malaysia",
  description: "Consultancy, strategic advisory, management services, personnel training and entertainment programmes from Digital Union Malaysia."
};

export default function GlobalTradeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
