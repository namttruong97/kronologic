import { GlobalOutlined } from '@ant-design/icons';

import { FC, HTMLAttributes } from 'react';

import { classMapping } from 'utils/helper';

type THeaderProps = HTMLAttributes<HTMLDivElement>;

export const Header: FC<THeaderProps> = ({ className, ...props }) => {
  return (
    <div className={classMapping('', className)} {...props}>
      <>
        <div className="flex items-center font-bold">
          <h1 className="mb-0 text-purple-primary lg:text-xl">GIPHY Trending</h1>
        </div>
        <ul className="w-3/5 lg:w-[350px] flex items-center justify-between lg:text-xl">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Support</li>
          <li className="cursor-pointer">
            <GlobalOutlined className="mr-1 lg:mr-2" />
            Language
          </li>
        </ul>
      </>
    </div>
  );
};

export default Header;
