export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'brand',
      type: 'string',
      title: 'Brand of the project',
    },
    {
      name: 'url',
      type: 'string',
      title: 'Url of the project',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the project',
    },
    {
      name: 'applicationType',
      type: 'string',
      title: 'Application type of the project',
    },
    {
      name: 'techs',
      type: 'array',
      title: 'Techs used in the project',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of the project',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order of the project',
    },
  ],
}
