'use client';

import { Category, Location } from '@/utils/types';
import { ChevronDown, LucideSearch } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  search: string;
  location: string;
  category: string;
};

interface JobFilterProps {
  onFilter?: (search: string, locationId: string, categoryId: string) => void;
  locations: Location[];
  categories: Category[];
}

const JobFilter = ({ onFilter, locations, categories }: JobFilterProps) => {
  const { register, watch, getValues } = useForm<FormValues>({
    defaultValues: {
      search: '',
      location: '',
      category: ''
    }
  });

  const location = watch('location');
  const category = watch('category');

  useEffect(() => {
    const timer = setTimeout(() => {
      const values = getValues();
      onFilter?.(values.search, location, category);
    }, 300);

    return () => clearTimeout(timer);
  }, [location, category, onFilter, getValues]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full flex-col items-stretch gap-4 sm:flex-row"
    >
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-[#737373] bg-[#262626] px-4 py-3 hover:bg-[#262626]/80">
          <span className="text-white">
            <LucideSearch size={22} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            {...register('search')}
            className="w-full bg-transparent text-white outline-none placeholder:text-white"
          />
        </div>
        <div className="flex w-full gap-4">
          <div className="relative max-w-3xs flex-1">
            <label htmlFor="location-select" className="sr-only">
              Job Location
            </label>
            <select
              id="location-select"
              {...register('location')}
              className="w-full appearance-none rounded-xl border border-[#737373] bg-[#262626] px-4 py-2 pr-10 text-white"
            >
              <option value="">Job Location</option>
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
              <ChevronDown className="h-6 w-6" />
            </div>
          </div>
          <div className="relative max-w-3xs flex-1">
            <label htmlFor="category-select" className="sr-only">
              Job Category
            </label>
            <select
              id="category-select"
              {...register('category')}
              className="w-full appearance-none rounded-xl border border-[#737373] bg-[#262626] px-4 py-2 pr-10 text-white"
            >
              <option value="">Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
              <ChevronDown className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const values = getValues();
          onFilter?.(values.search, values.location, values.category);
        }}
        className="bg-orange h-12 cursor-pointer rounded-md px-8 py-2 font-normal text-white hover:border hover:border-black hover:bg-white hover:text-black hover:opacity-90"
      >
        Search
      </button>
    </form>
  );
};

export default JobFilter;
