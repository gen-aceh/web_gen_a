"use client";

import ButtonTableKegiatan from "@/components/TableButton/ButtonTableKegiatan";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Warna, kumpulanWarna } from "@/lib/Constant";
import { cn } from "@/lib/utils";
import { Kegiatan } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Image from "next/image";

type DataKegiatan = Kegiatan & {
  author: { nama: string }
  subUnit: { singkatan: string, warna: string }
  tags: { id: number, nama: string }[]
}

export const columns: ColumnDef<DataKegiatan>[] = [
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
    accessorKey: "nama",
    header: "Nama Kegiatan",
  },
  {
    accessorKey: "deskripsi",
    header: "konten",
    cell: ({ row }) =>
    (
      <>
        <span dangerouslySetInnerHTML={{ __html: row.original.deskripsi.substring(0, 300) + "..." }}></span>
        <div className="text-sm text-muted-foreground my-3">
          <p className="font-semibold">Tanggal Pelaksanaan: </p>
          <p>{format(row.original.tanggal, "PPP")}</p>
        </div>
        <div className="flex gap-1">
          {row.original.tags.map(data => (
            <Badge key={data.id}>{data.nama}</Badge>
          ))}
        </div>
      </>
    )
  },
  {
    accessorKey: "subUnit",
    header: "Sub-Unit",
    cell: ({ row }) => {
      return <Badge className={cn("text-white", kumpulanWarna[row.original.subUnit.warna as Warna])}>{row.original.subUnit.singkatan}</Badge>;
    },
  },
  {
    accessorKey: "isUnggulan",
    header: "Unggulan",
    cell: ({ row }) => {
      return <Badge className={cn("w-6 h-6 rounded-full", {
        "bg-success": row.original.isUnggulan === true,
        "bg-destructive": row.original.isUnggulan === false
      })}>
      </Badge>;
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
        <ButtonTableKegiatan dataKegiatan={data} />
      );
    },
  },
];
