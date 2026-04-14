import ThreadsIcon from '@/components/ThreadsIcon';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const ROUTES = {
  HOME: '/',
  //TECHNOLOGY: '/technology',
  ABOUT: '/about',
  CAREER: '/career',
  CONTACT: '/contact',
  TERMS_AND_CONDITIONS: '/terms-and-conditions',
  PRIVACY: '/privacy',
  LINKEDIN: 'https://www.linkedin.com/company/vortech-entertainment/',
  FACEBOOK: 'https://www.facebook.com/profile.php?id=61578369500778',
  INSTAGRAM: 'https://www.instagram.com/vortech_entertainment/',
  X: 'https://www.threads.com/@vortech_entertainment?xmt=AQF0nNRMnH5VV-WKyMIh_fyOMwC-7HNk9OkQMmyxc8S1nmw'
};

export const FOOTER_SOCIALS = [
  { href: ROUTES.LINKEDIN, icon: Linkedin },
  { href: ROUTES.FACEBOOK, icon: Facebook },
  { href: ROUTES.INSTAGRAM, icon: Instagram },
  { href: ROUTES.X, icon: ThreadsIcon }
];
export const navItems = [
  { href: ROUTES.HOME, label: 'Home' },
  { href: ROUTES.ABOUT, label: 'About' },
  { href: ROUTES.CAREER, label: 'Career' },
  { href: ROUTES.CONTACT, label: 'Contact' }
];

export enum sizes {
  SIZE_32 = 32
}

export const stats = [
  { value: 247, label: 'Employees', max: 1000, text: '247', iconType: 'users' },
  { value: 8, label: 'Locations', max: 20, text: '8', iconType: 'mapPin' },
  {
    value: 123,
    label: 'Partners Worldwide',
    text: '123',
    max: 180,
    iconType: 'globe'
  }
  // {
  //   value: 200,
  //   label: 'Capital',
  //   max: 280,
  //   text: '$200M',
  //   iconType: 'dollarSign'
  // }
];

export const sources_video = {
  HERO_HOME_PAGE: './assets/videos/home_page_banner.mp4',
  VORTECH_NUMBER: './assets/videos/vortech_number.mp4'
};

export const images_src = {
  HOMEPAGE_HERO_BANNER: '/assets/images/home-banner.jpg',
  VISION_IMAGE: '/assets/images/vision.png',
  WHY_VORTECH_IMAGE: '/assets/images/why-vortech.png',
  OUR_PRODUCT_1: '/assets/images/product-1.jpg',
  OUR_PRODUCT_2: '/assets/images/product-2.jpg',
  OUR_PRODUCT_3: '/assets/images/product-3.jpg',
  OUR_PRODUCT_4: '/assets/images/product-4.jpg',
  MISSION_IMAGE_1: '/assets/images/mission-vortech.jpg',
  MISSION_IMAGE_2: '/assets/images/mission-img-2.png',
  LOGO: '/assets/images/logo-vortech.png',
  VOR_TECH_NUMBER: '/assets/images/vortech-number.jpg',
  ABOUT_BANNER_IMAGE: '/assets/images/about-banner.jpg',
  CONTACT_IMAGE: '/assets/images/contact-img.jpg',
  DEFAULT_JOB_IMAGE: '/assets/images/job-default-img.png'
};

export const ourPartners = [
  {
    imageURL: '/assets/images/logo_partner_1.avif'
  },
  {
    imageURL: '/assets/images/logo_partner_2.avif'
  },
  {
    imageURL: '/assets/images/logo_partner_3.avif'
  },
  {
    imageURL: '/assets/images/logo_partner_4.avif'
  }
];

export const IMAGE_FRAMES = {
  UI_FRAME: '/assets/images/ui_frame.png',
  EMPLOYEES_FRAME: '/assets/images/employees_frame.png'
};

export const OFFICE_LOCATIONS = {
  thaiLand:
    'Capital Tower, 87/1 Witthayu Rd, Lumphini, Pathum Wan, Bangkok, Thailand',
  sweden: 'IOFFICE Sveavägen 34, 111 34 Stockholm Sweden',
  romania: 'Bulevardul Expoziției 2 București Bucuresti, 012244, Romania',
  vietnam:
    'L’Mak 68 Phan Dang Luu, Duc Nhuan ward, (Phu Nhuan district) HCMC, Vietnam'
};

export const EMAIL_ADDRESS =
  process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'info@vortechinc.io';

export const navLinksData = [
  {
    title: 'Company',
    links: [
      //{ label: 'Technology', href: ROUTES.TECHNOLOGY },
      { label: 'About', href: ROUTES.ABOUT },
      { label: 'Career', href: ROUTES.CAREER }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: ROUTES.TERMS_AND_CONDITIONS },
      { label: 'Privacy Policy', href: ROUTES.PRIVACY }
    ]
  },
  {
    title: 'Community',
    links: [
      { label: 'LinkedIn', href: ROUTES.LINKEDIN },
      { label: 'Facebook', href: ROUTES.FACEBOOK },
      { label: 'Instagram', href: ROUTES.INSTAGRAM },
      { label: 'X', href: ROUTES.X }
    ]
  },
  {
    title: 'CONTACT',
    links: [
      { label: EMAIL_ADDRESS, href: '' },
      { label: OFFICE_LOCATIONS.thaiLand, href: '' },
      {
        label: OFFICE_LOCATIONS.sweden,
        href: ''
      },
      { label: OFFICE_LOCATIONS.romania, href: '' }
    ]
  }
];

export const productsCard = [
  {
    title: 'Full-cycle development',
    image: images_src.OUR_PRODUCT_1,
    desc: 'We deliver full-cycle software development outsourcing services tailored to the needs of businesses and product teams worldwide. Our teams support clients from early concept validation and prototyping through application development, system integration, and full production. By combining technical expertise with proven delivery workflows, we help ensure stable performance, scalability, and on-time delivery across mobile, desktop, and web platforms.'
  },
  {
    title: 'UI/UX & Creative Production',

    image: images_src.OUR_PRODUCT_2,
    desc: 'Our UI/UX and creative production services focus on translating ideas into high-quality, production-ready digital experiences. We provide interface design, visual design systems, UX research, prototyping, animation, and branding assets that meet both aesthetic and technical standards. Working closely with engineering teams, we ensure all deliverables are optimized for performance while maintaining a consistent product identity.'
  },
  {
    title: 'Engineering & Tech Services',

    image: images_src.OUR_PRODUCT_3,
    desc: 'Vortech provides comprehensive engineering and technology services to support complex software and digital product ecosystems. Our capabilities include frontend and backend development, cloud infrastructure setup, DevOps pipelines, system integration, and performance optimization. We help clients build reliable architectures, improve scalability, and maintain long-term system stability as products grow.'
  },
  {
    title: 'QA & Testing Services',

    image: images_src.OUR_PRODUCT_4,
    desc: 'We offer structured quality assurance and testing services to help clients release stable and reliable software products. Our QA teams perform functional, regression, performance, and cross-platform testing throughout the development lifecycle. By identifying issues early and validating updates before release, we help reduce risks, improve user experience, and ensure consistent quality across all supported platforms..'
  }
];

export const technologyInfoData = [
  {
    heading: 'ADVANCED DATA SECURITY',
    description:
      'This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.',
    imageURL: images_src.MISSION_IMAGE_1,
    reverse: false
  },
  {
    heading: 'REAL-TIME INFORMATION',
    description:
      'This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer. Consider adding an image or video to show off the product and entice visitors to make a purchase.',
    imageURL: images_src.MISSION_IMAGE_2,
    reverse: true
  }
];

export const dataURL = {
  privacy: '/src/data/terms.md',
  terms: '/src/data/terms.md'
};

export const JOB_PAGE_SIZE =
  Number(process.env.NEXT_PUBLIC_JOB_PAGE_SIZE) || 10;

export const GOOGLE_MAPS_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
