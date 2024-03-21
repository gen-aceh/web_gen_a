import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Berita } from "@prisma/client"
import FormUpdateBerita from "../form/FormUpdateBerita"

type propsDialog = {
    open: boolean,
    onOpenChange: (open: boolean) => void
    dataBerita: Berita & {
        kategori: { id: number, nama:string }[]
    }
}

const UpdateBeritaDialog = ({ open, onOpenChange, dataBerita }: propsDialog) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="xl:max-w-5xl lg:max-w-3xl sm:max-w-lg max-w-sm max-h-[95%] overflow-y-scroll py-10">
                <DialogHeader className="space-y-5">
                    <DialogTitle>Update Berita yang telah ente buat</DialogTitle>
                    <DialogDescription>
                        Updatelah sebagaimana yang anda inginkan, toh yang lelah nanti ente sendiri
                    </DialogDescription>
                </DialogHeader>
                <FormUpdateBerita open={open} onOpenChange={onOpenChange} dataBerita={dataBerita} />
            </DialogContent>
        </Dialog>
    )
}

export default UpdateBeritaDialog