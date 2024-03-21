import { prisma } from "@/lib/Prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextResponse) {
  try {
    const anggota = await prisma.anggota.findMany();
    return NextResponse.json(anggota, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}
