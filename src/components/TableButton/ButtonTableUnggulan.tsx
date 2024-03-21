"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'
import { Eye, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Kegiatan } from '@prisma/client'
import Link from 'next/link'
import DeleteUnggulanModal from '../DashboardComponent/AlertDialog/DeleteUnggulanModal '

const ButtonTableUnggulan = ({ dataKegiatan }: { dataKegiatan: Kegiatan }) => {
  const [openAlertDialog, setopenAlertDialog] = useState<boolean>(false)

  const handleAlertChange = () => setopenAlertDialog(!openAlertDialog)

  return (
    <>
      <div className="flex justify-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant='success' className="rounded-full" asChild>
                <Link href="/">
                  <Eye className="w-3" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              View
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
      <DeleteUnggulanModal open={openAlertDialog} onOpenChange={handleAlertChange} dataKegiatan={dataKegiatan} />
    </>
  )
}

export default ButtonTableUnggulan