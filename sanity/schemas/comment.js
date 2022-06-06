export default {
  name: 'comment',
  title: 'Comments',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'post',
      title: 'Post',
      description: 'This is a reference to posts',
      type: 'reference',
      to: { type: 'post' },
    },
  ],
};
