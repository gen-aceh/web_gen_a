"use client"

import { deleteBerita } from "@/action/beritaAction"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { useEdgeStore } from "@/lib/edgstore"
import { Berita } from "@prisma/client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type openAlertDialog = {
  open: boolean,
  onOpenChange: (open: boolean) => void
  dataBerita: Berita
}

const DeleteBeritaModal = ({ open, onOpenChange, dataBerita }: openAlertDialog) => {
  const { edgestore } = useEdgeStore()

  const router = useRouter();

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

              if (dataBerita.gambar != null) {
                await edgestore.publicImages.delete({
                  url: dataBerita.gambar
                })
              }

              await deleteBerita(dataBerita.id)

              toast.success("Success", {
                description: "Berita Berhasil Dihapus"
              })

              onOpenChange(!open)

              router.refresh();

            } catch (error) {

              toast.error("Error!", {
                description: "Err: something went wrong"
              })

              console.log(error)
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

export default DeleteBeritaModal