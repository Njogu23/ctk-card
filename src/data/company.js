// Shared company-level information. Individual cards inherit these values
// and override only the fields that differ per person (name, title, phone, email...).
export const company = {
  name: 'Come Travel Kenya Limited',
  tagline: 'We are a Destination Management Company',
  description:
    'Meetings Incentives Conferences Exhibitions, Safaris & Immigration Assistance Services.',
  logo: '/ctk-logo.png',
  website: 'http://www.cometravelkenya.com/',
  websiteLabel: 'www.cometravelkenya.com',
  email: 'safaris@cometravelkenya.com',
  address:
    'Rosslyn Riviera Mall, 2nd Floor Unit 205, Limuru Road, Nairobi Kenya.',
  // vCard-formatted address: PO Box;Extended;Street;City;Region;Postal;Country
  vcardAddress:
    ';;Rosslyn Riviera Mall, 2nd floor Unit 205, Limuru Road;;;;Kenya',
  phones: [
    { label: 'Call Us', value: '+254 (0) 711 082254', tel: '+254711082254' },
    { label: 'Call Us', value: '+254 (0) 746 910570', tel: '+254746910570' },
  ],
  whatsapp: { display: '+254 711 082 254', number: '+254711082254' },
  social: [
    { platform: 'Facebook', url: 'http://www.facebook.com/cometravelkenya/', icon: 'Facebook', color: '#1877F2' },
    { platform: 'Instagram', url: 'http://www.instagram.com/cometravelkenya_', icon: 'Instagram', color: '#E4405F' },
    { platform: 'Twitter', url: 'http://www.twitter.com/ComeTravelKe', icon: 'Twitter', color: '#1DA1F2' },
    { platform: 'LinkedIn', url: 'http://www.linkedin.com/company/come-travel-kenya', icon: 'Linkedin', color: '#0077B5' },
    { platform: 'TikTok', url: 'http://www.tiktok.com/@cometravelkenya', icon: 'TikTokIcon', color: '#000000' },
    { platform: 'YouTube', url: 'http://www.youtube.com/@Come_Travel_Kenya', icon: 'Youtube', color: '#FF0000' },
    { platform: 'Google', url: 'https://g.page/r/CfQ4wnfpa6zqEAE/review', icon: 'GoogleIcon', color: '#4285F4' },
    { platform: 'Threads', url: 'https://www.threads.net/@cometravelkenya_', icon: 'ThreadsIcon', color: '#000000' },
  ],
};
