import { prisma } from "@/lib/Prisma";

export async function GET(req: Request, res: Response) {
  try {
    const tags = await prisma.tags.findMany();
    return Response.json(tags, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}
