import { navLinksData } from '@/utils/constants';

const FooterNavItems = () => {
  return (
    <div className="grid h-auto grid-cols-1 grid-rows-none space-y-12 gap-x-2 md:w-5/6 md:grid-cols-2 md:grid-rows-2 md:gap-8 xl:max-h-60 xl:grid-cols-4">
      {navLinksData.map((navItem, index) => (
        <div key={index}>
          <div className="text-base tracking-wide text-white md:text-xl">
            {navItem.title}
          </div>
          <ul className="mt-1 space-y-0.5 text-base font-light text-white md:mt-2 md:space-y-1">
            {navItem.links.map((link, idx) => (
              <li key={idx}>
                {link.href === '' ? (
                  <span className="cursor-pointer">{link.label}</span>
                ) : (
                  <a href={link.href}>
                    <span className="cursor-pointer hover:text-black">
                      {link.label}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNavItems;
