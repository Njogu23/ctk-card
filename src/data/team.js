// One entry per person. `slug` becomes the card URL: /<slug>
// Any field left out falls back to the shared company value where it makes sense.
export const team = [
  {
    slug: 'jane-doe',
    name: 'Jane Doe',
    title: 'Managing Director',
    phone: { display: '+254 (0) 711 082254', tel: '+254711082254' },
    email: 'jane@cometravelkenya.com',
    whatsapp: { display: '+254 711 082 254', number: '+254711082254' },
    photo: null, // e.g. '/team/jane-doe.jpg' placed in /public/team
  },
  {
    slug: 'john-smith',
    name: 'John Smith',
    title: 'Safari Consultant',
    phone: { display: '+254 (0) 746 910570', tel: '+254746910570' },
    email: 'john@cometravelkenya.com',
    whatsapp: { display: '+254 746 910 570', number: '+254746910570' },
    photo: null,
  },
];

export function getMember(slug) {
  return team.find((m) => m.slug === slug) || null;
}
