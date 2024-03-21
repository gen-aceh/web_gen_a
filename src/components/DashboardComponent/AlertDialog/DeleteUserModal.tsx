"use client"

import { deleteUser } from "@/action/userAction"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { useEdgeStore } from "@/lib/edgstore"
import { User } from "@prisma/client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type openAlertDialog = {
  open: boolean,
  onOpenChange: (open: boolean) => void
  dataUser: User
}

const DeleteUserModal = ({ open, onOpenChange, dataUser }: openAlertDialog) => {
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

              if (dataUser.profile != null) {
                await edgestore.publicImages.delete({
                  url: dataUser.profile
                })
              }
              
              await deleteUser(dataUser.id)

              toast.success("Success", {
                description: "User Berhasil Dihapus"
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

export default DeleteUserModal