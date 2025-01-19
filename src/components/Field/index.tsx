/* eslint-disable react/display-name */
import { FC, forwardRef } from 'react';

import { Input, InputProps, InputRef } from 'antd';
import { classMapping } from 'utils/helper';

interface IFieldProps extends InputProps {
  className?: string;
  label?: string;
}

export const Field: FC<IFieldProps> = forwardRef<InputRef, IFieldProps>(
  ({ className, label, type, ...props }, ref) => {
    return (
      <>
        <span className="text-xs text-gray-label">{label}</span>
        {type === 'password' ? (
          <Input.Password
            className={classMapping('', className)}
            ref={ref}
            {...props}
            iconRender={() => (
              <span style={{ cursor: 'pointer' }} className="text-purple-primary">
                SHOW
              </span>
            )}
          />
        ) : (
          <Input className={className} ref={ref} {...props} />
        )}
      </>
    );
  }
);
