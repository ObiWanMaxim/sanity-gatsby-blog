export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600d01d7bc194e5cf5ad7bea',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nc2vgcc9',
                  apiId: 'd716600c-f6a5-4792-b066-6d16ad827d2c'
                },
                {
                  buildHookId: '600d01d7bd7fe4eb487ec655',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4ntutk7f',
                  apiId: 'bae12607-419e-4a0b-9f8c-754670451e7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ObiWanMaxim/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4ntutk7f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
