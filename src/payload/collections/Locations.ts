import type { CollectionConfig } from 'payload';

const isAuthenticated: NonNullable<CollectionConfig['access']>['create'] = ({
  req
}) => Boolean(req.user);

export const Locations: CollectionConfig = {
  slug: 'locations',
  access: {
    create: isAuthenticated,
    delete: isAuthenticated,
    read: () => true,
    update: isAuthenticated
  },
  admin: {
    defaultColumns: ['name', 'isActive'],
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'address',
      type: 'textarea'
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true
    }
  ]
};
