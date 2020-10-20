export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f8f51c9bf8aa313b70dcfa9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k5ncwpxk',
                  apiId: '40cbcfeb-4255-4672-bc89-cb4b34e718e9'
                },
                {
                  buildHookId: '5f8f51c9fe00fa1dde1fefe5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i455cnoe',
                  apiId: '3bc5e458-e320-4e76-be8c-5b1023a074d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sts0mrg0/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i455cnoe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
