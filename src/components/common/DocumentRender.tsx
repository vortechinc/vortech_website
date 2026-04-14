import React from 'react';
import type { JSX } from 'react';

interface DocumentNode {
  type: string;
  level?: number;
  children?: DocumentNode[];
  text?: string;
  bold?: boolean;
  url?: string;
}

interface DocumentRendererProps {
  document:
    | DocumentNode[]
    | { document: DocumentNode[] }
    | string
    | null
    | undefined;
}

export function DocumentRenderer({ document }: DocumentRendererProps) {
  let nodes: DocumentNode[] = [];

  if (Array.isArray(document)) {
    nodes = document;
  } else if (
    typeof document === 'object' &&
    document !== null &&
    'document' in document &&
    Array.isArray((document as { document: DocumentNode[] }).document)
  ) {
    nodes = (document as { document: DocumentNode[] }).document;
  } else if (typeof document === 'string') {
    return <div className="prose max-w-none">{document}</div>;
  } else {
    return <div>No content available</div>;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 2xl:max-w-5xl">
      {nodes.map((node, index) => renderNode(node, index))}
    </div>
  );
}

function renderNode(node: DocumentNode, key: number): React.ReactNode {
  if (!node) return null;

  switch (node.type) {
    case 'heading':
      return renderHeading(node, key);

    case 'paragraph':
      return renderParagraph(node, key);

    case 'unordered-list':
      return renderUnorderedList(node, key);

    case 'ordered-list':
      return renderOrderedList(node, key);

    case 'list-item':
      return renderListItem(node, key);

    case 'list-item-content':
      return renderListItemContent(node, key);

    case 'divider':
      return renderDivider(node, key);

    case 'blockquote':
      return renderBlockquote(node, key);

    case 'link':
      return renderLink(node, key);

    default:
      if (node.text) {
        return renderText(node, key);
      }
      return null;
  }
}

function renderHeading(node: DocumentNode, key: number): React.ReactNode {
  const level = node.level || 1;
  const content = renderChildren(node.children || []);

  const HeadingTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;

  const responsiveClasses = [
    'text-2xl sm:text-2xl md:text-4xl font-bold mb-3 mt-6', // h1
    'text-xl sm:text-xl md:text-3xl font-bold mb-3 mt-6', // h2
    'text-lg sm:text-lg md:text-2xl font-bold mb-3 mt-6', // h3
    'text-base sm:text-base md:text-xl font-bold mb-3 mt-6', // h4
    'text-base font-bold mb-3 mt-6', // h5
    'text-sm font-bold mb-3 mt-6' // h6
  ];
  const className = responsiveClasses[Math.min(level, 6)];

  return React.createElement(HeadingTag, { className, key }, content);
}

function renderParagraph(node: DocumentNode, key: number): React.ReactNode {
  const content = renderChildren(node.children || []);
  return (
    <p
      key={key}
      className="mb-4 text-base leading-relaxed sm:text-lg md:text-xl"
    >
      {content}
    </p>
  );
}

function renderUnorderedList(node: DocumentNode, key: number): React.ReactNode {
  return (
    <ul key={key} className="ml-2 list-inside list-disc space-y-2">
      {node.children?.map((child, index) => renderNode(child, index))}
    </ul>
  );
}

function renderOrderedList(node: DocumentNode, key: number): React.ReactNode {
  return (
    <ol key={key} className="ml-2 list-inside list-decimal space-y-2">
      {node.children?.map((child, index) => renderNode(child, index))}
    </ol>
  );
}

function renderListItem(node: DocumentNode, key: number): React.ReactNode {
  return (
    <li key={key} className="space-y-2 leading-relaxed font-light">
      {node.children?.map((child, index) => {
        if (child.type === 'list-item-content') {
          return renderListItemContent(child, index);
        }
        return renderNode(child, index);
      })}
    </li>
  );
}

function renderListItemContent(
  node: DocumentNode,
  key: number
): React.ReactNode {
  const content = renderChildren(node.children || []);
  return <span key={key}>{content}</span>;
}

function renderText(node: DocumentNode, key: number): React.ReactNode {
  if (!node.text) return null;

  if (node.text === '\n') {
    return <br key={key} />;
  }

  const text = node.text;

  if (node.bold) {
    return (
      <strong key={key} className="font-semibold">
        {text}
      </strong>
    );
  }

  return <span key={key}>{text}</span>;
}

function renderChildren(children: DocumentNode[]): React.ReactNode[] {
  return children.map((child, index) => {
    if (child.text !== undefined) {
      return renderText(child, index);
    }
    return renderNode(child, index);
  });
}

function renderDivider(node: DocumentNode, key: number): React.ReactNode {
  return <hr key={key} className="my-6 border-t border-gray-300" />;
}
function renderBlockquote(node: DocumentNode, key: number): React.ReactNode {
  const content = renderChildren(node.children || []);
  return (
    <blockquote
      key={key}
      className="my-4 border-l-4 border-gray-300 pl-4 text-gray-700 italic"
    >
      {content}
    </blockquote>
  );
}

function renderLink(node: DocumentNode, key: number): React.ReactNode {
  const url = node.url || '';
  const content = renderChildren(node.children || []);
  if (!url) {
    return <span key={key}>{content}</span>;
  }
  return (
    <a
      key={key}
      href={url}
      className="text-blue-600 underline hover:text-blue-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}
