"use client"

import { Eye, FileEdit, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import Link from "next/link"
import { Afiliasi } from "@prisma/client"
import { useState } from "react"
import DeleteAfiliasiModal from "../DashboardComponent/AlertDialog/DeleteAfiliasiModal"
import UpdateAfiliasiDialog from "../DashboardComponent/Dialog/UpdateAfiliasiModal"

const ButtonTableAfiliasi = ({ dataAfiliasi }: { dataAfiliasi: Afiliasi }) => {
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
                            <Button
                                size="sm"
                                variant="success"
                                className="rounded-full"
                                asChild
                            >
                                <Link target="_blank" href={`/afiliasi/${dataAfiliasi.singkatan}`}>
                                    <Eye className="w-3" />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>View</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button size="sm" className="rounded-full" onClick={() => handleUpdateModal()}>
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
                                onClick={() => handleDeleteModal()}
                            >
                                <Trash2 className="w-3" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Delete</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <DeleteAfiliasiModal open={openDeleteModal} onOpenChange={handleDeleteModal} dataAfiliasi={dataAfiliasi} />
            <UpdateAfiliasiDialog open={openUpdateModal} onOpenChange={handleUpdateModal} dataAfiliasi={dataAfiliasi} />
        </>
    )
}

export default ButtonTableAfiliasi