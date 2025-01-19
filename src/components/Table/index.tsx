/* eslint-disable react/display-name */
import { SortAscendingOutlined } from '@ant-design/icons';

import { FC, HTMLAttributes, TdHTMLAttributes, forwardRef } from 'react';

import { classMapping } from 'utils/helper';

interface ITableProps extends HTMLAttributes<HTMLTableElement> {
  className?: string;
}

export const Table: FC<ITableProps> = forwardRef<HTMLTableElement, ITableProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        data-testid="table"
        className={classMapping('text-default text-base overflow-auto', className)}
      >
        <table
          data-testid="table-tag"
          ref={ref}
          className="w-full border-0"
          {...props}
          cellSpacing={0}
          cellPadding={4}
        >
          {children}
        </table>
      </div>
    );
  }
);

interface ITrProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

export const Tr: FC<ITrProps> = forwardRef<HTMLTableRowElement, ITrProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tr
        data-testid="tr"
        className={classMapping('[&:hover>td>div:first-child]:bg-grey-background', className)}
        ref={ref}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

interface ITdProps extends TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

export const Td: FC<ITdProps> = forwardRef<HTMLTableCellElement, ITdProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <td
        data-testid="td"
        className={classMapping(
          '[&:first-child>div]:rounded-l-md [&:last-child>div]:rounded-r-md relative whitespace-nowrap',
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          data-testid="bg"
          className="absolute -ml-1 -mr-1 bg-white pointer-events-none top-1 left-1 bottom-1 right-1"
        />
        <div
          className={classMapping(
            'relative px-4 py-4 inline-flex flex-wrap w-full z-0 text-xs text-gray-secondary font-medium',
            props.align === 'center' && 'justify-center',
            props.align === 'right' && 'justify-end'
          )}
        >
          {children}
        </div>
      </td>
    );
  }
);

interface IThProps extends TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
  isSort?: boolean;
  order?: 'default' | 'ASC' | 'DESC';
}

export const Th: FC<IThProps> = forwardRef<HTMLTableCellElement, IThProps>(
  ({ className, children, isSort, order, ...props }, ref) => {
    const orderVariant = order === 'ASC' ? 'sorting-asc' : 'sorting-desc';
    return (
      <th
        data-testid="th"
        className={classMapping('px-5 py-2 font-bold uppercase text-left', className)}
        ref={ref}
        {...props}
      >
        {isSort && <SortAscendingOutlined className="mr-1 text-base" />}
        <span className={isSort ? 'cursor-pointer text-gray-sortable' : ''}> {children}</span>
      </th>
    );
  }
);

interface ITheadProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const Thead: FC<ITheadProps> = forwardRef<HTMLTableSectionElement, ITheadProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead
        data-testid="thead"
        className={classMapping('text-[10px] text-gray-primary text-left font-bold', className)}
        ref={ref}
        {...props}
      >
        {children}
      </thead>
    );
  }
);

interface ITbodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const Tbody: FC<ITbodyProps> = forwardRef<HTMLTableSectionElement, ITbodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tbody data-testid="tbody" className={classMapping('', className)} ref={ref} {...props}>
        {children}
      </tbody>
    );
  }
);
