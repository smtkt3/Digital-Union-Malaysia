import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Digital Union Malaysia",
  description: "Start a conversation with Digital Union Malaysia about technology, global trade or strategic advisory."
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
