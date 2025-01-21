export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the blog',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of the blog',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content of the blog',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
        {
          type: 'code',
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image of the blog',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags of the blog',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
