export default function () {
  return [{
    title: 'Resume',
    to: {
      name: 'blog-overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Blog Posts',
    htmlBefore: '<i class="material-icons">vertical_split</i>',
 
    items:[
            {
              title: 'Add New Post',              
              to: {
                name: 'add-new-post',
              },
            },
            {
              title: 'Posts Lists',              
              to: {
                name: 'blog-posts',
              },
            }
          ]
  }, 
  {
    title: 'Forms & Components',
    htmlBefore: '<i class="material-icons">view_module</i>',
    to: {
      name: 'components-overview',
    },
  }, {
    title: 'Tables',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'tables',
    },
  }, {
    title: 'User Profile',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'user-profile-lite',
    },
  }, {
    title: 'Errors',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'errors',
    },
  }];
}
