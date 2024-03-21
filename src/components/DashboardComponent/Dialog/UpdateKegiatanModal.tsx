import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Kegiatan } from "@prisma/client"
import FormUpdateKegiatan from "../form/FormUpdateKegiatan "

type propsDialog = {
    open: boolean,
    onOpenChange: (open: boolean) => void
    dataKegiatan: Kegiatan & {
        tags: { id: number, nama:string }[]
    }
}

const UpdateKegiatanDialog = ({ open, onOpenChange, dataKegiatan }: propsDialog) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="xl:max-w-5xl lg:max-w-3xl sm:max-w-lg max-w-sm max-h-[95%] overflow-y-scroll py-10">
                <DialogHeader className="space-y-5">
                    <DialogTitle>Update Kegiatan yang telah ente buat</DialogTitle>
                    <DialogDescription>
                        Updatelah sebagaimana yang anda inginkan, toh yang lelah nanti ente sendiri
                    </DialogDescription>
                </DialogHeader>
                <FormUpdateKegiatan open={open} onOpenChange={onOpenChange} dataKegiatan={dataKegiatan} />
            </DialogContent>
        </Dialog>
    )
}

export default UpdateKegiatanDialog