"use client";

import ButtonTableAfiliasi from "@/components/TableButton/ButtonTableAfiliasi";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Warna, kumpulanWarna } from "@/lib/Constant";
import { cn } from "@/lib/utils";
import { Afiliasi } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<Afiliasi>[] = [
  {
    id: "Id",
    header: "No.",
    cell: ({ row }) => {
      return <>{row.index + 1}</>
    }
  },
  {
    accessorKey: "logo",
    header: "Logo",
    cell: ({ row }) => {
      return (
        <AspectRatio ratio={1/1}>
          <Image className="rounded-full object-cover shadow-sm shadow-slate-800" src={row.getValue("logo")} alt="logo" fill sizes="30px" />
        </AspectRatio>
      );
    },
  },
  {
    accessorKey: "nama",
    header: "Nama Sub-Unit",
  },
  {
    accessorKey: "singkatan",
    header: "Singkatan",
    cell: ({ row }) => (
      <div className="flex justify-center items-center font-semibold">{row.getValue("singkatan")}</div>
    )
  },
  {
    accessorKey: "warna",
    header: "Warna",
    cell: ({ row }) => {
      const warna = row.getValue("warna")
      return (
        <div className="flex justify-center items-center">
          <Badge className={cn("w-5 h-5", kumpulanWarna[warna as Warna])}></Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "deskripsi",
    header: "Deskripsi",
    cell: ({ row }) => {
      const deskripsi: string = row.getValue("deskripsi");
      return (
        <div dangerouslySetInnerHTML={{ __html: deskripsi}}></div>
      )
    }
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <ButtonTableAfiliasi dataAfiliasi={data} />
      );
    },
  },
];
