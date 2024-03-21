import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import FormUpdateUser from "../form/FormUpdateUser"
import { User } from "@prisma/client"

type propsDialog = {
    open: boolean,
    onOpenChange: (open: boolean) => void
    dataUser: User
}

const UpdateUserDialog = ({ open, onOpenChange, dataUser }: propsDialog) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="space-y-5">
                    <DialogTitle>Update User yang telah ente buat</DialogTitle>
                    <DialogDescription>
                        Updatelah sebagaimana yang anda inginkan, toh yang bingung nanti anda sendiri
                    </DialogDescription>
                </DialogHeader>
                <FormUpdateUser open={open} onOpenChange={onOpenChange} dataUser={dataUser} />
            </DialogContent>
        </Dialog>
    )
}

export default UpdateUserDialog