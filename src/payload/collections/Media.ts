import type { CollectionConfig } from 'payload';

const isAuthenticated: NonNullable<CollectionConfig['access']>['create'] = ({
  req
}) => Boolean(req.user);

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: isAuthenticated,
    delete: isAuthenticated,
    read: () => true,
    update: isAuthenticated
  },
  admin: {
    useAsTitle: 'alt'
  },
  upload: {
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre'
      }
    ]
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true
    }
  ]
};
