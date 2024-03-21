import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

type props = {
    open : boolean
    onOpenChange : (open: boolean) => void
    src : string
}

const ImagePopModal = ({ open, onOpenChange, src } : props) => {
  return (
      <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent>
            <Image src={src} alt="" width={1920} height={1080} />
          </DialogContent>
      </Dialog>
  )
}

export default ImagePopModal