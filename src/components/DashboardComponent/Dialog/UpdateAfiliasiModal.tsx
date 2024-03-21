import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Afiliasi } from "@prisma/client"
import FormUpdateAfiliasi from "../form/FormUpdateAfiliasi"

type propsDialog = {
    open: boolean,
    onOpenChange: (open: boolean) => void
    dataAfiliasi: Afiliasi
}

const UpdateAfiliasiDialog = ({ open, onOpenChange, dataAfiliasi }: propsDialog) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="xl:max-w-5xl lg:max-w-3xl sm:max-w-lg max-w-sm max-h-[95%] overflow-y-scroll">
                <DialogHeader className="space-y-5">
                    <DialogTitle>Update Sub-Unit yang telah ente buat</DialogTitle>
                    <DialogDescription>
                        Updatelah sebagaimana yang anda inginkan, toh yang lelah nanti ente sendiri
                    </DialogDescription>
                </DialogHeader>
                <FormUpdateAfiliasi open={open} onOpenChange={onOpenChange} dataAfiliasi={dataAfiliasi} />
            </DialogContent>
        </Dialog>
    )
}

export default UpdateAfiliasiDialog