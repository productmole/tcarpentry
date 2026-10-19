// Central business facts + service definitions (single source of truth).
import { CookingPot, Shirt, Hammer, LayoutPanelTop, type LucideIcon } from 'lucide-react'

export const SITE = {
  name: 'Total Carpentry',
  legalName: 'Total Carpentry Services',
  established: 2014,
  phonePrimary: { display: '07834 772046', tel: '07834772046' },
  phoneSecondary: { display: '01275 844094', tel: '01275844094' },
  email: 'info@tcarpentry.co.uk',
  // Town and region only: the owner keeps his street address off Google Maps.
  address: {
    town: 'Portishead',
    region: 'North Somerset',
  },
  whatsapp: 'https://wa.me/447834772046',
  facebook: 'https://www.facebook.com/totalcarpentry',
  instagram: 'https://www.instagram.com/totalcarpentryportishead/',
  googleMaps: 'https://www.google.com/maps?cid=11834095425836009702',
  // Town-level map only, so no street address is pinned.
  mapEmbed: 'https://www.google.com/maps?q=Portishead,+North+Somerset,+UK&z=12&output=embed',
  googleReviews: 'https://www.google.com/search?q=Total+Carpentry+Portishead+reviews',
} as const

export interface ServiceDef {
  label: string
  short: string
  to: string
  Icon: LucideIcon
  tagline: string
}

export const SERVICES: ServiceDef[] = [
  {
    label: 'Kitchen Installations',
    short: 'Kitchens',
    to: '/services/kitchen-installations',
    Icon: CookingPot,
    tagline: 'Fitted and made-to-measure kitchens, set out and installed with a joiner’s eye.',
  },
  {
    label: 'Fitted Wardrobes',
    short: 'Wardrobes',
    to: '/services/fitted-wardrobes',
    Icon: Shirt,
    tagline: 'Built-in bedroom storage shaped to your room, alcoves and eaves included.',
  },
  {
    label: 'House Renovations',
    short: 'Renovations',
    to: '/services/house-renovations',
    Icon: Hammer,
    tagline: 'First-fix to final finish — reworking rooms so the whole house earns its keep.',
  },
  {
    label: 'Wood Flooring Installations',
    short: 'Flooring',
    to: '/services/wood-flooring-installations',
    Icon: LayoutPanelTop,
    tagline: 'Solid timber and laminate, laid level and tight for floors that stay put.',
  },
]

export const AREAS = [
  'Portishead', 'Abbots Leigh', 'Avonmouth', 'Backwell', 'Clapton-in-Gordano',
  'Clevedon', 'Easton-in-Gordano', 'Failand', 'Ham Green', 'Leigh Woods',
  'Long Ashton', 'Nailsea', 'Pill', 'Portbury', 'Redcliff Bay',
  'Shirehampton', 'Tickenham', 'Walton-in-Gordano',
]
