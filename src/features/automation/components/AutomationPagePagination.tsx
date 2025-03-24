import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

export function AutomationPagePagination({
  currentPage,
}: {
  currentPage: number;
}) {
  return (
    <Pagination className="w-full justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            // disabled={Boolean(currentPage === 1)}
            href={`?page=${currentPage <= 1 ? 1 : currentPage - 1}`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`?page=${currentPage}`} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`?page=${currentPage + 1}`}>
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`?page=${currentPage + 2}`}>
            {currentPage + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`?page=${currentPage + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
