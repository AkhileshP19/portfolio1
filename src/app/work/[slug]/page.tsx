import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
const caseStudies = projects.filter((project) => project.caseStudy);
import ProjectCaseStudy from "@/components/project/ProjectCaseStudy";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((project) => project.slug === slug);
  if (!project) notFound();
  const title = `${project.title} — ${project.subtitle}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title,
      description: project.summary,
      url: `/work/${slug}`,
      type: "article",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: ["/opengraph-image"],
    },
  };
}
export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((project) => project.slug === slug);
  if (index < 0) notFound();
  return (
    <ProjectCaseStudy
      project={caseStudies[index]}
      next={caseStudies[(index + 1) % caseStudies.length]}
    />
  );
}
