"use client"

import { deleteAnggota } from "@/action/anggotaAction"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { useEdgeStore } from "@/lib/edgstore"
import { Anggota  } from "@prisma/client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type openAlertDialog = {
  open: boolean,
  onOpenChange: (open: boolean) => void
  dataAnggota: Anggota
}

const DeleteAnggotaModal = ({ open, onOpenChange, dataAnggota }: openAlertDialog) => {
  const router = useRouter();
  const { edgestore } = useEdgeStore()

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader className="space-y-4">
          <AlertDialogTitle>Yakin ni? nggak nyesal?</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan Ini akan langsung menghapus data diserver jadi nggak mungkin balik lagi, jadi yakinkan diri anda terlebih dahulu dengan shalat sunnah rawatib
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={async () => {
            try {
              if (dataAnggota.profile != null) {
                await edgestore.publicImages.delete({
                  url: dataAnggota.profile
                })
              }

              await deleteAnggota(dataAnggota.id)

              toast.success("Success", {
                description: "Anggota Berhasil Dihapus"
              })

              onOpenChange(!open)

              router.refresh();

            } catch (error) {

              toast.error("Error!", {
                description: "Err: something went wrong"
              })

              console.error(error)
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

export default DeleteAnggotaModal