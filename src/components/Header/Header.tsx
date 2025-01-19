import { FC, HTMLAttributes } from 'react';

import { useRouter } from 'next/router';
import { classMapping } from 'utils/helper';

type THeaderProps = HTMLAttributes<HTMLDivElement>;

export const Header: FC<THeaderProps> = ({ className, ...props }) => {
  const router = useRouter();
  return (
    <header
      className={classMapping(
        'z-[-1] w-full px-6 lg:px-12 py-8 flex items-center justify-between shadow bg-primary',
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center font-bold">
          <h1 className="mb-0 text-white lg:text-xl" onClick={() => router.push('/')}>
            Kronologic Paris 1920
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
