import { prisma } from "@/lib/Prisma";

export async function GET(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    return Response.json(users, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}
