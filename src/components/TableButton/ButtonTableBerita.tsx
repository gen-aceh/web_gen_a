"use client"

import { Eye, FileEdit, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { useState } from "react"
import Link from "next/link"
import { Berita } from "@prisma/client"
import DeleteBeritaModal from "../DashboardComponent/AlertDialog/DeleteBeritaModal"
import UpdateBeritaDialog from "../DashboardComponent/Dialog/UpdateBeritaModal"

type DataBerita = Berita & {
    author: { nama: string }
    editor: { nama: string }
    kategori: { id: number, nama: string }[]
}

const ButtonTableBerita = ({ dataBerita }: { dataBerita: DataBerita }) => {
    const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false)
    const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false)

    const handleUpdateDialog = () => setOpenUpdateDialog(!openUpdateDialog)
    const handleDeleteDialog = () => setOpenDeleteDialog(!openDeleteDialog)

    return (
        <>
            <div className="flex justify-center gap-3">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="sm"
                                variant="success"
                                className="rounded-full"
                                asChild
                            >
                                <Link target="_blank" href={dataBerita.link}>
                                    <Eye className="w-3" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-center">View <br /> <span className="text-xs font-thin text-blue-600">{dataBerita.link}</span></TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="sm" className="rounded-full" onClick={() => handleUpdateDialog()}>
                                <FileEdit className="w-3" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Edit</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="sm"
                                className="rounded-full"
                                variant="destructive"
                                onClick={() => handleDeleteDialog()}
                            >
                                <Trash2 className="w-3" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Delete</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <DeleteBeritaModal open={openDeleteDialog} onOpenChange={handleDeleteDialog} dataBerita={dataBerita} />
            <UpdateBeritaDialog open={openUpdateDialog} onOpenChange={handleUpdateDialog} dataBerita={dataBerita} />
        </>
    )
}

export default ButtonTableBerita