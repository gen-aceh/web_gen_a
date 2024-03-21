"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { UserPlus2 } from "lucide-react";
import CreateUserDialog from "./Dialog/CreateUserModal";
import UpdateUserDialog from "./Dialog/UpdateUserModal";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTableUser<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenDialog = (open: boolean) => setOpen(open)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter Nama..."
          value={(table.getColumn("nama")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("nama")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-gray-500"
        />
        <Button onClick={() => setOpen(true)}>
          <UserPlus2 className="mr-2" /> Tambah User
        </Button>
      </div>

      <div className="relative mt-16">
        <Alert className="absolute -top-10 left-0 right-0 w-[95%] m-auto z-[5]">
          <AlertTitle>Hai User!</AlertTitle>
          <AlertDescription>
            Disini nih buat lihat daftar User &nbsp;
            <span className="font-bold">Gen A</span> yang terdaftar, selamat
            melihat
          </AlertDescription>
        </Alert>

        <div className="overflow-y-auto">
          <Table className="border-t-4 border-primary border-b-2 w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow className="h-[100px]" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead className="align-bottom" key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    className="whitespace-nowrap xl:whitespace-normal"
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}

                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex justify-end gap-5 mt-4">
        {!table.getCanPreviousPage() && !table.getCanNextPage() ? (
          <div></div>
        ) : (
          <>
            <Button
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous Page
            </Button>
            <Button
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next Page
            </Button>
          </>
        )}
      </div>
      <CreateUserDialog open={open} onOpenChange={handleOpenDialog} />
    </>
  );
}
