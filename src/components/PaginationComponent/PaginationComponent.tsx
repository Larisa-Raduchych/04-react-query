import ReactPaginateModule from 'react-paginate';
import css from './PaginationComponent.module.css';
import type { ReactPaginateProps } from 'react-paginate';
import type { ComponentType } from 'react';

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

interface PaginationComponentProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (nextPage: number) => void;
}

export default function PaginationComponent({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationComponentProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
