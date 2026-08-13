export const siteConfig = {
  name: 'Oxmew',
  ticker: 'OXMEW',
  blockchain: 'Solana',
  supply: '1B',
  profitFlow: [
    {
      percentage: 70,
      label: 'Shelters for disabled cats',
      shortLabel: 'Shelters',
      description: 'For shelters caring for cats with one eye, no eyes, missing limbs and other disabilities',
      accent: '#8BFF5A',
    },
    {
      percentage: 20,
      label: 'Community',
      shortLabel: 'Community',
      description: 'For contests, meme battles and social campaigns that carry the movement further',
      accent: '#FF2AA3',
    },
    {
      percentage: 2,
      label: 'Future treasury',
      shortLabel: 'Treasury',
      description: 'Reserved for larger rescue projects and long term initiatives',
      accent: '#19C7FF',
    },
    {
      percentage: 8,
      label: 'Team',
      shortLabel: 'Team',
      description: 'Shared by the team building and operating the Oxmew ecosystem',
      accent: '#F4F5F7',
    },
  ],
  socials: {
    pump: 'https://pump.fun',
    x: 'https://x.com',
    telegram: 'https://t.me',
  },
} as const
