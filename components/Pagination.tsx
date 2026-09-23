'use client';

import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mt-8 flex items-center justify-center gap-4">
      {currentPage > 1 ? (
        <a href={createPageURL(currentPage - 1)} className="rounded border border-gray-300 px-4 py-2 text-blue-600 hover:bg-gray-100" >Previous</a>
      ) : (
        <span className="rounded border border-gray-200 px-4 py-2 text-gray-400">
          Previous
        </span>
      )}

      <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
      {currentPage < totalPages ? (
        <a href={createPageURL(currentPage + 1)} className="rounded border border-gray-300 px-4 py-2 text-blue-600 hover:bg-gray-100" >Next</a>
      ) : (
        <span className="rounded border border-gray-200 px-4 py-2 text-gray-400">Next</span>
      )}
    </nav>
  );
}
