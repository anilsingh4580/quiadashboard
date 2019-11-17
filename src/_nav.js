export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    
    {
      name: 'Questions',
      url: '/question',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Jackpot',
          url: '/question/jackpot',
          icon: 'icon-puzzle',
        },
       
        {
          name: 'Fun',
          url: '/question/fun',
          icon: 'icon-puzzle',
        },
      ],
    },
    
  ],
};
