"use client"

import { deleteUnggulan } from "@/action/kegiatanAction"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Kegiatan } from "@prisma/client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type openAlertDialog = {
  open: boolean,
  onOpenChange: (open: boolean) => void
  dataKegiatan: Kegiatan
}

const DeleteUnggulanModal = ({ open, onOpenChange, dataKegiatan }: openAlertDialog) => {
  const router = useRouter();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader className="space-y-4">
          <AlertDialogTitle>Yakin? ya nggak masalah sih</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan Ini nggak akan merugikan siapapun, toh nanti bisa dibalikin lagi. Hapus ajalah, suka hati
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={async () => {
            try {
              const id = dataKegiatan.id

              await deleteUnggulan( id );

              toast.success("Success", {
                description: "Unggulan Berhasil Dihapus"
              })

              onOpenChange(!open)

              router.refresh();

            } catch (error) {

              toast.error("Error!", {
                description: "Err: " + error
              })

              onOpenChange(!open)
            }
          }}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteUnggulanModal