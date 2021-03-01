import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://hopswap.fi/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://hopswap.fi/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://hopswap.fi/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://hopswap.fi/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://hopswap.fi/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://hopswap.fi/teams',
      },
      {
        label: 'Task Center',
        href: 'https://hopswap.fi/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://hopswap.fi/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://hopswap.fi/info',
      },
      {
        label: 'Tokens',
        href: 'https://hopswap.fi/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://hopswap.fi/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://hopswap.fi/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://hopswap.fi/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.hopswap.fi',
      },
      {
        label: 'Github',
        href: 'https://github.com/hopswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.hopswap.fi',
      },
      {
        label: 'Blog',
        href: 'https://hopswap.medium.com',
      },
    ],
  },
]

export default config
