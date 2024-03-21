import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import FormUser from "../form/FormUser"

type propsDialog = {
  open: boolean,
  onOpenChange: (open: boolean) => void
}

const CreateUserDialog = ({ open, onOpenChange }: propsDialog) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="space-y-5">
          <DialogTitle>Membuat User Baru</DialogTitle>
          <DialogDescription>
            Ayo Masukkan User sesedikit mungkin, Jangan banyak-banyak
          </DialogDescription>
        </DialogHeader>
        <FormUser open={open} onOpenChange={onOpenChange}/>
      </DialogContent>
    </Dialog>
  )
}

export default CreateUserDialog