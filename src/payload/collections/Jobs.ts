import type { CollectionConfig } from 'payload';

const isAuthenticated: NonNullable<CollectionConfig['access']>['create'] = ({
  req
}) => Boolean(req.user);

const formatSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  access: {
    create: isAuthenticated,
    delete: isAuthenticated,
    read: () => true,
    update: isAuthenticated
  },
  admin: {
    defaultColumns: ['title', 'status', 'location', 'category', 'publishedAt'],
    useAsTitle: 'title'
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.title && !data.slug) {
          data.slug = formatSlug(data.title);
        }

        if (data?.status === 'published' && !data.publishedAt) {
          data.publishedAt = new Date().toISOString();
        }

        return data;
      }
    ]
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      required: true,
      unique: true
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Closed', value: 'closed' }
      ],
      required: true
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
      required: true
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true
    },
    {
      name: 'employmentType',
      type: 'select',
      defaultValue: 'full-time',
      options: [
        { label: 'Full-time', value: 'full-time' },
        { label: 'Part-time', value: 'part-time' },
        { label: 'Contract', value: 'contract' },
        { label: 'Internship', value: 'internship' }
      ]
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true
    },
    {
      name: 'description',
      type: 'textarea',
      required: true
    },
    {
      name: 'requirements',
      type: 'textarea'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime'
        }
      }
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0
    }
  ]
};
