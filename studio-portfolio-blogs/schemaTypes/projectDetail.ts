export default {
  name: 'projectDetail',
  type: 'document',
  title: 'Project Detail',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'title of the project',
    },
    {
      name: 'role',
      type: 'string',
      title: 'my role',
    },
    {
      name: 'video',
      type: 'file',
      title: 'Video of the project',
    },
    {
      name: 'applicationType',
      type: 'string',
      title: 'Application type of the project',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of the project',
    },
    {
      name: 'keyFeatures',
      type: 'array',
      title: 'key Features of the project',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'responsive',
      type: 'array',
      title: 'responsive of the project',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'stack',
      type: 'array',
      title: 'Stack of the project',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'github',
      type: 'string',
      title: 'Github link of the project',
    },
    {
      name: 'live',
      type: 'string',
      title: 'live link of the project',
    },
  ],
}
