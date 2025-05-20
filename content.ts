import { ServiceType, TeamMemberType, PartnerType, FeatureType } from '../types';

export const services: ServiceType[] = [
  {
    id: 1,
    title: 'Video Editing',
    description: 'Professional video editing services that transform raw footage into compelling, high-quality content.',
    icon: 'VideoIcon',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Custom website solutions designed to enhance your online presence and provide excellent user experiences.',
    icon: 'Code2Icon',
  },
  {
    id: 3,
    title: 'Graphic Designing',
    description: 'Creative design solutions that communicate your brand message visually and effectively.',
    icon: 'PaletteIcon',
  },
  {
    id: 4,
    title: 'Social Media Managing',
    description: 'Strategic social media management that builds your online presence and engages your audience.',
    icon: 'ShareIcon',
  },
  {
    id: 5,
    title: 'YouTube Thumbnails',
    description: 'Eye-catching thumbnails designed to increase click-through rates and video performance.',
    icon: 'ImageIcon',
  },
  {
    id: 6,
    title: 'Reel Making',
    description: 'Engaging short-form video content creation optimized for social media platforms.',
    icon: 'ClapperboardIcon',
  },
];

export const teamMembers: TeamMemberType[] = [
  {
    id: 1,
    name: 'Aleeza Mirza',
    role: 'Founder and Designer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Alayna Mirza',
    role: 'Designer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Amyrah Mirza',
    role: 'Social Marketer',
    image: 'https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const partners: PartnerType[] = [
  {
    id: 1,
    name: 'Canva',
    logo: 'CanvaIcon',
  },
  {
    id: 2,
    name: 'GoDaddy',
    logo: 'GlobeIcon',
  },
  {
    id: 3,
    name: 'bolt.new',
    logo: 'BoltIcon',
  },
];

export const features: FeatureType[] = [
  {
    id: 1,
    title: 'Creative Excellence',
    description: 'We bring style, skill, and strategic thinking to every project.',
    icon: 'AwardIcon',
  },
  {
    id: 2,
    title: 'Minimalist Aesthetic',
    description: 'Clean, modern, and professional visuals that align with your brand.',
    icon: 'LayoutIcon',
  },
  {
    id: 3,
    title: 'Custom Solutions',
    description: 'Everything we create is uniquely tailored to your goals.',
    icon: 'SettingsIcon',
  },
  {
    id: 4,
    title: 'End-to-End Support',
    description: "From ideation to execution, we're with you every step of the way.",
    icon: 'HeartHandshakeIcon',
  },
  {
    id: 5,
    title: 'Timely Delivery',
    description: 'We respect your deadlines and deliver without compromise on quality.',
    icon: 'ClockIcon',
  },
];