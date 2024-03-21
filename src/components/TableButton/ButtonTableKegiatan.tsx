"use client"

import { Eye, FileEdit, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { useState } from "react"
import Link from "next/link"
import { Kegiatan } from "@prisma/client"
import DeleteKegiatanModal from "../DashboardComponent/AlertDialog/DeleteKegiatanModal"
import UpdateKegiatanDialog from "../DashboardComponent/Dialog/UpdateKegiatanModal"

type DataKegiatan = Kegiatan & {
    author: { nama: string }
    tags: { id: number, nama: string }[]
}

const ButtonTableKegiatan = ({ dataKegiatan }: { dataKegiatan: DataKegiatan }) => {
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
                                <Link target="_blank" href="/">
                                    <Eye className="w-3" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-center">View</TooltipContent>
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
            <DeleteKegiatanModal open={openDeleteDialog} onOpenChange={handleDeleteDialog} dataKegiatan={dataKegiatan} />
            <UpdateKegiatanDialog open={openUpdateDialog} onOpenChange={handleUpdateDialog} dataKegiatan={dataKegiatan} />
        </>
    )
}

export default ButtonTableKegiatan