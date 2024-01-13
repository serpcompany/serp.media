import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Videos',
      links: [
        {
          text: 'YouTube',
          href: 'https://serp.ly/@serpmedia/youtube',
          target: '_blank',
        },
      ],
    },
    {
      text: 'Content',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Glossary',
        //   href: getPermalink('/glossary'),
        // },
      ],
    },
   
  ],
  actions: [{ text: 'Subscribe', href: '/subscribe/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Website', href: 'https://serp.media' },
        { text: 'About', href: '/about/' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Newsletter', href: '/subscribe/' },
        { text: 'Community', href: '/#' },
      ],
    },
    {
      title: 'Links',
      links: [
        { text: 'Medium', href: 'https://medium.com/serpmedia', target: '_blank' },
        { text: 'Pages', href: 'https://serpmedia.pages.dev', target: '_blank' },
        { text: 'Substack', href: 'https://serpmedia.substack.com/', target: '_blank' },
        { text: 'Hashnode', href: 'https://serpdotmedia.hashnode.dev/', target: '_blank' },
        { text: 'Website', href: 'https://serp.media/', target: '_blank' },
      ],
    },
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy/' },
        { text: 'Terms & Conditions', href: '/terms/' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
        { text: 'DMCA', href: '/dmca/' },
        { text: 'Archive', href: '/archive/' },
        { text: 'Tags', href: '/tags/' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Free Stuff', href: 'https://stuff.serp.media' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@serpmedia/twitter', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://serp.ly/@serpmedia/instagram', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://serp.ly/@serpmedia/facebook', target: '_blank' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://serp.ly/@serpmedia/youtube', target: '_blank' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://serp.ly/@serpmedia/linkedin', target: '_blank' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://serp.ly/@serpmedia/tiktok', target: '_blank' },
    { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://serp.ly/@serpmedia/medium', target: '_blank' },
  ],
  
};
