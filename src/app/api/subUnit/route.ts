import { prisma } from "@/lib/Prisma";

export async function GET(req: Request, res: Response) {
    try {
        const subUnit = await prisma.afiliasi.findMany()
        return Response.json( subUnit , { status: 200 })
    } catch (error) {
        return Response.json({ error: "Gagal mengambil data" }, { status: 500 })
    }
}