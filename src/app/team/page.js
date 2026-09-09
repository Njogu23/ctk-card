import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/company';
import { team } from '@/data/team';

export const metadata = {
  title: `Our Team — ${company.name}`,
  description: `Meet the team at ${company.name}`,
};

const BRAND = {
  green: '#2b4921',
  gradient: 'linear-gradient(135deg, #2b4921 0%, #f99f1b 50%, #d93d27 100%)',
};

export default function TeamIndexPage() {
  return (
    <div className="min-h-screen p-4" style={{ background: BRAND.gradient }}>
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          {/* Header */}
          <div className="relative p-8 text-white" style={{ background: BRAND.gradient }}>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Image src={company.logo} height={80} width={80} alt={`${company.name} logo`} />
              </div>
              <div className="text-center lg:text-left flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">Our Team</h1>
                <p className="text-lg opacity-80">{company.name}</p>
              </div>
            </div>
          </div>

          {/* Member list */}
          <div className="p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {team.map((member) => (
                <Link
                  key={member.slug}
                  href={`/${member.slug}`}
                  className="rounded-xl p-4 border border-gray-200 hover:border-orange-300 flex items-center gap-4 transition-all duration-300 hover:translate-x-1 hover:bg-orange-50"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(249, 159, 27, 0.1)' }}>
                    {member.photo ? (
                      <Image src={member.photo} height={64} width={64} alt={member.name} className="object-cover w-full h-full" />
                    ) : (
                      <span className="text-xl font-bold" style={{ color: BRAND.green }}>
                        {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.title}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="inline-block text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300" style={{ backgroundColor: BRAND.green }}>
                View company card
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-white opacity-75">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
