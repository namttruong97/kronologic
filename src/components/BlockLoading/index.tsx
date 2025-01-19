import { LoadingOutlined } from '@ant-design/icons';

import { FC } from 'react';

import { Spin } from 'antd';

export interface IBlockLoadingProps {
  isOpen?: boolean;
}

export const BlockLoading: FC<IBlockLoadingProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 flex items-end justify-center w-screen h-screen bg-hero-pattern bg-primary bg-contain bg-no-repeat bg-center">
          <div className="text-center mb-32">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 60, color: 'white' }} spin />} />
            {/* <h2 className="mt-10 text-xl font-semibold text-white uppercase">
              Kronologic App Check
            </h2> */}
          </div>
        </div>
      )}
    </>
  );
};
