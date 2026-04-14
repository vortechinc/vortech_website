import { FOOTER_SOCIALS, navLinksData } from '@/utils/constants';
import LogoItem from './LogoItem';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black-gray w-full space-y-6 px-8 py-8 md:space-y-8 md:px-10 md:py-12 lg:px-14 lg:py-16 xl:px-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="mb-8 flex-1 md:mr-8 md:mb-0">
          <LogoItem className="mb-6 w-2/5 max-w-40 md:mb-8" />
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-white md:text-base">
              Global Presence
            </h3>
            <p className="text-sm leading-relaxed text-white md:text-base">
              UK • Romania • Vietnam • Thailand • India • Taiwan • Bulgaria •
              Sweden
            </p>
            <Link
              href="/#global-map"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-150 hover:scale-x-105 hover:gap-3 md:text-base"
            >
              View Global Map
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
          {navLinksData.slice(0, 2).map((section) => (
            <div key={section.title} className="mb-6 sm:mb-0">
              <h3 className="mb-3 text-base leading-none font-medium tracking-normal text-white md:text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2 text-xs text-white md:text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-150 hover:text-orange-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-3 text-base leading-none font-medium tracking-normal text-white md:text-lg">
              Community
            </h3>
            <div className="flex flex-row gap-2 md:gap-3">
              {FOOTER_SOCIALS.map(({ href, icon: Icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded bg-white transition-colors duration-150 hover:bg-orange-100 md:h-12 md:w-12"
                >
                  <Icon size={22} className="text-[#520304] md:size-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-3 text-start text-xs font-medium text-white md:text-sm">
        &copy; {new Date().getFullYear()} by Vortech
      </div>
    </footer>
  );
};

export default Footer;
