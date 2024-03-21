"use client"

import { FileEdit, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Anggota } from "@prisma/client"
import { useState } from "react"
import DeleteAnggotaModal from "../DashboardComponent/AlertDialog/DeleteAnggotaModal"
import UpdateAnggotaDialog from "../DashboardComponent/Dialog/UpdateAnggotaModal"

type DataAnggota = Anggota & {
    afiliasi: { singkatan: string }
}

const ButtonTableAnggota = ({ dataAnggota }: { dataAnggota: DataAnggota }) => {
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    
    const handleUpdateModal = () => setOpenUpdateModal(!openUpdateModal)
    const handleDeleteModal = () => setOpenDeleteModal(!openDeleteModal)

    return (
        <>
            <div className="flex justify-center gap-3">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="sm" className="rounded-full" onClick={() => handleUpdateModal()}>
                                <FileEdit className="w-3" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Edit
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="sm"
                                className="rounded-full"
                                variant="destructive"
                                onClick={() => handleDeleteModal()}
                            >
                                <Trash2 className="w-3" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Delete
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <DeleteAnggotaModal open={openDeleteModal} onOpenChange={handleDeleteModal} dataAnggota={dataAnggota} />
            <UpdateAnggotaDialog open={openUpdateModal} onOpenChange={handleUpdateModal} dataAnggota={dataAnggota} />
        </>
    )
}

export default ButtonTableAnggota