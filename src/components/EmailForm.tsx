'use client';

import {
  PLEASE_ENTER_YOUR_EMAIL_ADDRESS,
  SUBSCRIBE,
  YOU_MUST_AGREE_TO_SUBSCRIBE
} from '@/utils/lang';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  agree: boolean;
};

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = () => {
    reset();
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border-0 border-b border-gray-600 py-4 text-base text-gray-400 focus:outline-none md:text-xl"
        {...register('email', {
          required: { value: true, message: PLEASE_ENTER_YOUR_EMAIL_ADDRESS },
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format'
          }
        })}
        autoComplete="email"
      />
      {errors.email && (
        <div className="text-base text-red-500 md:text-xl">
          {errors.email.message}
        </div>
      )}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="agree"
          className="mt-1 h-5 w-5 cursor-pointer"
          {...register('agree', {
            required: { value: true, message: YOU_MUST_AGREE_TO_SUBSCRIBE }
          })}
        />
        <label htmlFor="agree" className="text-base text-gray-600 md:text-xl">
          Yes, subscribe me to your newsletter. *
        </label>
      </div>
      {errors.agree && (
        <div className="text-base text-red-500 md:text-xl">
          {errors.agree.message}
        </div>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-red-orange text-red-light hover:border-red-orange hover:text-red-orange my-8 w-full cursor-pointer rounded-full py-4 text-base transition hover:border hover:bg-white md:my-12 md:w-1/2 md:text-xl lg:text-2xl"
        >
          {SUBSCRIBE}
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
