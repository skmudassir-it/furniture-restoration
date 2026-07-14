import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "RevivalCraft Furniture Restoration — Expert Wood Restoration & Refinishing",
};

export default function HomePage() {
  return <HomeClient />;
}
