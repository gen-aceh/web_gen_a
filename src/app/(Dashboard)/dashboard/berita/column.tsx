"use client";

import ButtonTableBerita from "@/components/TableButton/ButtonTableBerita";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Berita } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Image from "next/image";

type DataBerita = Berita & {
  author: { nama: string }
  editor: { nama: string }
  kategori: { id: number, nama: string }[]
}

export const columns: ColumnDef<DataBerita>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "gambar",
    header: "Gambar",
    cell: ({ row }) => {
      return (
        <AspectRatio ratio={16 / 9}>
          {row.getValue("gambar") ?
            <Image className="rounded object-cover shadow-sm shadow-slate-800" src={row.getValue("gambar")} alt="Featured Image..." fill sizes="33vw" />
            :
            <div className="w-full h-full bg-third-gradient rounded-lg flex justify-center items-center text-white font-semibold">NO</div>
          }
        </AspectRatio>
      );
    },
  },
  {
    accessorKey: "judul",
    header: "Judul",
  },
  {
    accessorKey: "konten",
    header: "konten",
    cell: ({ row }) => (
      <>
        <span dangerouslySetInnerHTML={{ __html: row.getValue("konten") }}></span>
        <p className="text-sm text-muted-foreground mt-3">{format(row.original.tanggal, "PPP")}</p> <br />
        <div className="flex gap-1">
          {row.original.kategori.map(data => (
            <Badge key={data.id}>{data.nama}</Badge>
          ))}
        </div>
      </>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <Badge>{row.getValue("status")}</Badge>;
    },
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => <>{row.original.author.nama}</>
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <ButtonTableBerita dataBerita={data} />
      );
    },
  },
];
