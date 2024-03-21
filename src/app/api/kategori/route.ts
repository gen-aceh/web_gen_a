import { prisma } from "@/lib/Prisma";

export async function GET(req: Request, res: Response) {
  try {
    const kategori = await prisma.kategori.findMany();
    return Response.json(kategori, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}
