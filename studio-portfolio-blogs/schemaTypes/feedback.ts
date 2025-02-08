export default {
  name: 'feedback',
  type: 'document',
  title: 'Feedback',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of the user',
    },
    {
      name: 'avatar',
      type: 'number',
      title: 'Avatar of the user',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email of the user',
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message of the user',
    },
    {
      name: 'projectName',
      type: 'string',
      title: 'Project name',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
    },
    {
      name: 'approved',
      type: 'boolean',
      title: 'Approved',
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Created at',
    },
  ],
}
