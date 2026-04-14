'use client';

import { cn } from '@/utils/cn';
import { navItems, sizes } from '@/utils/constants';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogoItem from './LogoItem';

export default function Header({}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white px-8 transition-colors duration-500 md:px-10 lg:px-14 xl:px-32">
      <div className="mx-auto flex h-22 w-full items-center justify-between p-2 md:h-24 md:py-4">
        <LogoItem />
        <div className="flex items-center space-x-4 md:space-x-12">
          <nav className="hidden space-x-4 text-lg leading-none font-medium tracking-normal text-black md:flex md:space-x-12">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn('hover:text-orange', {
                    'text-orange': pathname === item.href
                  })}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {!menuOpen && (
            <button
              className={cn('text-black md:hidden')}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <Menu size={sizes.SIZE_32} />
            </button>
          )}
          {menuOpen && (
            <nav className="fixed inset-0 z-50 flex flex-col items-center gap-8 bg-white p-8 text-black shadow-lg md:hidden">
              <button aria-label="Close menu">
                <X
                  size={sizes.SIZE_32}
                  className="absolute top-6 right-6"
                  onClick={() => setMenuOpen(false)}
                />
              </button>

              {navItems.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'h-14 w-full border-black pb-10 text-center text-xl',
                    {
                      'border-b-[0.5px]': idx !== navItems.length - 1,
                      'text-orange font-normal': pathname === item.href
                    }
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
