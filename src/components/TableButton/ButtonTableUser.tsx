"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'
import { FileEdit, Trash2 } from 'lucide-react'
import DeleteUserModal from '../DashboardComponent/AlertDialog/DeleteUserModal'
import { useState } from 'react'
import UpdateUserDialog from '../DashboardComponent/Dialog/UpdateUserModal'
import { User } from '@prisma/client'

const ButtonTableUser = ({ dataUser } : { dataUser: User }) => {
  const [openAlertDialog, setopenAlertDialog] = useState<boolean>(false)
  const [openUpdateDialog, setopenUpdateDialog] = useState<boolean>(false)

  const handleAlertChange = () => setopenAlertDialog(!openAlertDialog)
  const handleUpdateChange = () => setopenUpdateDialog(!openUpdateDialog)

  return (
    <>
      <div className="flex justify-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" className="rounded-full" onClick={() => handleUpdateChange()}>
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
                onClick={() => handleAlertChange()}
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
      <DeleteUserModal open={openAlertDialog} onOpenChange={handleAlertChange} dataUser={dataUser} />
      <UpdateUserDialog dataUser={dataUser} onOpenChange={handleUpdateChange} open={openUpdateDialog} />
    </>
  )
}

export default ButtonTableUser