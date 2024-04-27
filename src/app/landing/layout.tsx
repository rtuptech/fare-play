import type { Metadata } from "next";
import Layout from "@/components/Layout/Landing";

export const metadata: Metadata = {
  title: "Fare Play",
  description: "Gamble for free",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
