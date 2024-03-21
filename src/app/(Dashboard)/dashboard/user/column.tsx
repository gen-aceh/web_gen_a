"use client";

import ButtonTableUser from "@/components/TableButton/ButtonTableUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
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
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>
    }
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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "username",
    header: "Username"
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      return <Badge variant="outline">{row.getValue("role")}</Badge>;
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <ButtonTableUser dataUser={data} />
      )
    },
  },
];
