import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Before and after transformations showcasing our furniture restoration, refinishing, and repair work.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
