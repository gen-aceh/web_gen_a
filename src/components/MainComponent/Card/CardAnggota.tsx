"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { EyeIcon, ScrollText } from "lucide-react"

type props = {
    jabatan: string,
    nama: string,
    deskripsi: string
}

const CardAnggota = ({ jabatan, nama, deskripsi }: props) => {
    return (
        <Card className="w-[350px] text-center mx-auto">
            <CardHeader>
                <CardTitle>{jabatan}</CardTitle>
                <Avatar>
                    <AvatarImage src="http://localhost:3000" />
                    <AvatarFallback>No Img</AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent>
                {nama}
                <CardDescription dangerouslySetInnerHTML={{ __html: deskripsi.substring(0, 100) + "..." }}></CardDescription>
            </CardContent>
            <CardFooter className="gap-2 justify-end">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button className="rounded-full" variant="success" size="icon"><EyeIcon className="w-4 h-4" /></Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            Lebih Detail
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button className="rounded-full" size="icon"><ScrollText className="w-4 h-4" /></Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            Porto
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardFooter>
        </Card>
    )
}

export default CardAnggota