module.exports = {
  title: 'Koshinto documents',
  description: 'Prevent casual tampering casually.',
  dest: 'public/docs',
  base: '/docs/',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-43410269-6' // UA-00000000-0
      }
    ],
    [
      'vuepress-plugin-google-adsense',
      {
        'google_ad_client': 'ca-pub-1717720203982550', // ca-pub-0000000000000000
        'enable_page_level_ads': true
      }
    ],
    ['mermaidjs']
  
  ],
  themeConfig: {
//    sidebar: 'auto',
    sidebarDepth: 4,
//    displayAllHeaders: true, // Default: false
    sidebar: {
      '/guide/': [
        '',
        {
          title: 'Getting Started',
          collapsable: true,
          children: [
            'getting-started/signup',
            'getting-started/download',
            'getting-started/embeded',
            'getting-started/settings'
          ]
        }
      ],
      '/users-manual/': [
        {
          title: "Account",
          collapsable: true,
          children: [
            '/users-manual/account/',
            '/users-manual/account/changeemail',
            '/users-manual/account/changename',
            '/users-manual/account/deleteaccount',
            '/users-manual/account/newpassword',
            '/users-manual/account/signout',
          ]
        },
        {
          title: "Binds",
          collapsable: true,
          children: [
            '/users-manual/binds/',
            '/users-manual/binds/bindmenu',
            '/users-manual/binds/bindslist',
            '/users-manual/binds/keys',
            '/users-manual/binds/safekeeping',
            '/users-manual/binds/sansilibrarydownload',
            '/users-manual/binds/status'
          ]
        },
        {
          title: "Purchase",
          collapsable: true,
          children: [
            '/users-manual/purchase/',
            '/users-manual/purchase/purchasebind',
            '/users-manual/purchase/purchasehistory',
          ]
        },
      ]
    },
    lastUpdated: 'Last Updated', // string | boolean
      
    nav: [
      { text: 'Guide', link: '/guide/'},
      { text: 'Documents', 
        items: [
          {
            text: 'Users Manual',
            items: [
              { text: 'User Guide', link: '/users-manual/'},
              { text: 'How to', link: '/howto/'},
            ]
          },
          {
            text: 'Technical specifications',
            items: [
              { text: 'Features', link: '/features/'},
              { text: 'Sansi', link: '/sansi/'},
              { text: 'Glossary', link: '/glossary'},
              { text: 'Origin of the name', link: '/origin/'}
            ]
          },
          {
            text: 'Miscellaneous ',
            items: [
              { text: 'Glossary', link: '/glossary'},
              { text: 'Origin of the name', link: '/origin/'}
            ]
          },
        ]
      },
      {
        text: 'Support',
        items: [
          { text: 'User Forum', link: 'https://groups.google.com/g/koshinto_sansi'},
        ]
      },
      { text: 'back to App', link: '/'},
    ]
  }
}
