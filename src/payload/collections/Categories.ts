import type { CollectionConfig } from 'payload';

const isAuthenticated: NonNullable<CollectionConfig['access']>['create'] = ({
  req
}) => Boolean(req.user);

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: isAuthenticated,
    delete: isAuthenticated,
    read: () => true,
    update: isAuthenticated
  },
  admin: {
    defaultColumns: ['name', 'department', 'level', 'isActive'],
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
      name: 'department',
      type: 'text'
    },
    {
      name: 'level',
      type: 'text'
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true
    }
  ]
};
