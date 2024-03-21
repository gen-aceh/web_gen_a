import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Anggota } from "@prisma/client"
import FormUpdateAnggota from "../form/FormUpdateAnggota"

type DataAnggota = Anggota & {
    afiliasi: { singkatan: string }
}

type propsDialog = {
    open: boolean,
    onOpenChange: (open: boolean) => void
    dataAnggota: DataAnggota
}

const UpdateAnggotaDialog = ({ open, onOpenChange, dataAnggota }: propsDialog) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="xl:max-w-6xl lg:max-w-3xl sm:max-w-lg max-w-sm max-h-[95%] overflow-y-scroll p-10">
                <DialogHeader className="space-y-5">
                    <DialogTitle>Update data Anggota yang telah ente buat</DialogTitle>
                    <DialogDescription>
                        Updatelah sebagaimana yang anda inginkan, toh yang lelah nanti ente sendiri
                    </DialogDescription>
                </DialogHeader>
                <FormUpdateAnggota open={open} onOpenChange={onOpenChange} dataAnggota={dataAnggota} />
            </DialogContent>
        </Dialog>
    )
}

export default UpdateAnggotaDialog