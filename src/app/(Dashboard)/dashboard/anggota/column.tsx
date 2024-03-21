"use client";

import ButtonTableAnggota from "@/components/TableButton/ButtonTableAnggota";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Anggota } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, AwardIcon, BriefcaseIcon, FlameIcon, GripHorizontalIcon, InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

type DataAnggota = Anggota & {
  afiliasi: { singkatan: string }
}

export const columns: ColumnDef<DataAnggota>[] = [
  {
    accessorKey: "No",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 h-4"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.index + 1}</div>
  },
  {
    accessorKey: "profile",
    header: "Profile",
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.getValue("profile")} />
          <AvatarFallback className="font-semibold text-white bg-third-gradient">NO</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "nama",
    header: "Nama",
  },
  {
    accessorKey: "gender",
    header: "gender",
  },
  {
    accessorKey: "tanggalLahir",
    header: "Umur",
    cell: ({ row }) => {
      const present = new Date();
      const usia = present.getFullYear() - row.original.tanggalLahir.getFullYear()
      return (
        <>{usia} th</>
      )
    },
  },
  {
    accessorKey: "afiliasiId",
    header: "Sub-Unit",
    cell: ({ row }) => {
      const data = row.original
      return (
        <span className="font-semibold">
          {data.afiliasi.singkatan}
        </span>
      )
    }
  },
  {
    accessorKey: "jabatan",
    header: "Jabatan",
    cell: ({ row }) => {
      return <Badge variant="outline"
        className={cn({
          "bg-gradient-to-br from-sky-400 via-sky-400 to-sky-500 text-white": row.getValue("jabatan") === "Sekretaris",
          "bg-gradient-to-br from-green-400 via-green-400 to-green-500 text-white": row.getValue("jabatan") === "Bendahara",
          "bg-gradient-to-br from-indigo-400 via-indigo-400 to-indigo-500 text-white": row.getValue("jabatan") === "Anggota",
          "bg-gradient-to-br from-orange-400 via-orange-400 to-orange-500 text-white": row.getValue("jabatan") === "Ketua",
        })}>
        {row.getValue("jabatan")}
      </Badge>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className={cn("w-5 h-5 rounded-full", {
        "bg-success" : row.getValue("status") === "Aktif",
        "bg-destructive" : row.getValue("status") === "TidakAktif"
      })}></div>
    )
  },
  {
    accessorKey: "more",
    header: "More",
    cell: ({ row }) => {
      const data = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <GripHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="px-5 py-2 w-96 max-h-[500px] border-t-4 border-t-yellow-400 overflow-y-scroll">
            <DropdownMenuLabel>More...</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ul>
              <li className="p-3 text-sm flex item-center gap-2 rounded-md my-2 bg-neutral-100 text-justify" dangerouslySetInnerHTML={{__html: data.about}}></li>
              <li className="p-2 text-sm flex item-center gap-2"><AwardIcon />Pendidikan</li>
              <Separator className="mb-2" />
              <li className="text-xs ml-10 mb-3">{data.pendidikan}</li>
              <li className="p-2 text-sm flex item-center gap-2"><BriefcaseIcon />Bidang</li>
              <Separator className="mb-2" />
              <li className="text-xs ml-10 mb-3">{data.bidang}</li>
              <li className="p-2 text-sm flex item-center gap-2"><FlameIcon />Keahlian</li>
              <Separator className="mb-2" />
              <li className="text-xs ml-10 mb-3">{data.keahlian}</li>
              <li className="p-2 text-sm flex item-center gap-2"><MailIcon />Email</li>
              <Separator className="mb-2" />
              <li className="text-xs ml-10 mb-3">{data.email}</li>
              <li className="p-2 text-sm flex item-center gap-2"><InstagramIcon />Instagram</li>
              <Separator className="mb-2" />
              <li className="text-xs ml-10 mb-3">{data.instagram}</li>
              <li className="p-2 text-sm flex item-center gap-2"><PhoneIcon />Phone</li>
              <Separator className="mb-2" />
              <li className="text-xs ml-10 mb-3">{data.telephone}</li>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <ButtonTableAnggota dataAnggota={data} />
      );
    },
  },
];
