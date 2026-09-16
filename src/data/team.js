// One entry per person. `slug` becomes the card URL: /<slug>
// Any field left out falls back to the shared company value where it makes sense.
export const team = [
  {
    slug: 'ola',
    name: 'Olalekan Akinola SAMUELS',
    title: 'Operations Director',
    phone: { display: '+254 746 910570', tel: '+254746910570' },
    email: 'ola@cometravelkenya.com',
    whatsapp: { display: '+254 746 910 570', number: '+254746910570' },
    photo:'/team/ola.jpg' 
  },
  {
    slug: 'lilian',
    name: 'Lilian Akinola',
    title: 'Managing Director',
    phone: { display: '+254 738 082290', tel: '+254738082290' },
    email: 'lilian@cometravelkenya.com',
    whatsapp: { display: '+254 738 082 290', number: '+254738082290' },
    photo: '/team/lilian.jpg',
  },
  {
    slug: 'felistus',
    name: 'Felistus Wanza PETER',
    title: 'Tours Consultant',
    phone: { display: '+254 739 391892', tel: '+254739391892' },
    email: 'felistus@cometravelkenya.com',
    whatsapp: { display: '+254 739 391 892', number: '+254739391892' },
    photo: '/team/feli.jpg',
  },
  {
    slug: 'leon',
    name: 'Leon Yuri LIGABO',
    title: 'M.I.C.E Consultant',
    phone: { display: '+254 793 586403', tel: '+254793586403' },
    email: 'leon@cometravelkenya.com',
    whatsapp: { display: '+254 793 586 403', number: '+254793586403' },
    photo: '/team/leon.jpg',
  },
  {
    slug: 'emily',
    name: 'Emily Wekulo',
    title: 'Content Writer & Storyteller',
    phone: { display: '+254 719 892103', tel: '+254719892103' },
    email: 'emily@cometravelkenya.com',
    whatsapp: { display: '+254 719 892 103', number: '+254719892103' },
    photo: '/team/emily.jpg',
  },
  {
    slug: 'keryta',
    name: 'Keryta NEKESA',
    title: 'Tours & Safaris Dept.',
    phone: { display: '+254 711 082 254', tel: '+254711082254' },
    email: 'keryta@cometravelkenya.com',
    whatsapp: { display: '+254 711 082 254', number: '+254711082254' },
    photo:'/team/keryta.jpg' 
  },
  {
    slug: 'angella',
    name: 'Angella WANJIKU',
    title: 'M.I.C.E. Dept.',
    phone: { display: '+254 746 910570', tel: '+254746910570' },
    email: 'angela@cometravelkenya.com',
    whatsapp: { display: '+254 746 910570', number: '+254746910570' },
    photo: '/team/angela.jpg',
  }
];

export function getMember(slug) {
  return team.find((m) => m.slug === slug) || null;
}
