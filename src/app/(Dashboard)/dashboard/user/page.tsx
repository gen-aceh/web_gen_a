import { columns } from "./column";
import { Metadata } from "next";
import { DataTableUser } from "@/components/DashboardComponent/DataTableUser";
import { getUsers } from "@/lib/Config";
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title : "Users"
}

const Users = async() => {
  noStore()
  const data = await getUsers();

  return (
    <section>
      <DataTableUser columns={columns} data={data} />
    </section>
  );
};

export default Users;
