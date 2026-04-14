export type Category = {
  id: string;
  name: string;
};

export type Location = {
  id: string;
  name: string;
  address?: string;
  link?: string;
};

export type Image = {
  url: string;
};

export interface DocumentNode {
  type: string;
  level?: number;
  children?: DocumentNode[];
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export type RichTextDocument = DocumentNode[] | { document: DocumentNode[] };

export type Job = {
  id: string;
  position: string;
  description: RichTextDocument;
  content?: string;
  location?: Location;
  category?: Category;
  image?: Image;
  createdAt: string;
};

export type Post = Job;

export type JobParams = {
    limit?: number;
    page?: number;
    search?: string;
    locationId?: string;
    categoryId?: string 
}

export type Pagable<T> = {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    total: number;
  };
};
