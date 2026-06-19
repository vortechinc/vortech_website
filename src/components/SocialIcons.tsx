interface SocialIconProps {
  size?: number;
  className?: string;
}

export const FacebookIcon = ({ size = 24, className = '' }: SocialIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
  </svg>
);

export const InstagramIcon = ({ size = 24, className = '' }: SocialIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect width="18" height="18" x="3" y="3" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedinIcon = ({ size = 24, className = '' }: SocialIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.94 8.98H3.81V20h3.13V8.98ZM5.38 4a1.82 1.82 0 1 0 0 3.64 1.82 1.82 0 0 0 0-3.64ZM20.19 13.67c0-2.96-1.58-4.34-3.69-4.34-1.7 0-2.46.94-2.88 1.6V8.98h-3.13c.04 1.03 0 11.02 0 11.02h3.13v-6.16c0-.33.02-.66.12-.9.25-.66.82-1.34 1.78-1.34 1.25 0 1.75 1.01 1.75 2.48V20h3.13l-.21-6.33Z" />
  </svg>
);
