import { notFound } from 'next/navigation';
import BusinessCard from '@/components/BusinessCard';
import { company } from '@/data/company';
import { team, getMember } from '@/data/team';

// Pre-render one static page per team member at build time.
export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false; // unknown slugs -> 404

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${company.name}`,
    description: `${member.name}, ${member.title} at ${company.name}`,
  };
}

export default async function MemberCardPage({ params }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();
  return <BusinessCard person={member} />;
}
