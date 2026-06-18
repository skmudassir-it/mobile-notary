import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "SignSwift Mobile Notary — We Come to You",
  description: "On-demand mobile notary and loan signing services. Available 7 days a week. We come to your home, office, hospital, or coffee shop.",
};

export default function HomePage() {
  return <HomeClient />;
}
