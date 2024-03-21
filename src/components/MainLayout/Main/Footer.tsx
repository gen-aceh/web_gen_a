import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getConfig } from "@/lib/Config"
import { Mails, Map, Phone, SearchIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = async() => {
    const config = await getConfig();

    return (
        <>
            <footer className="block sm:hidden footer">
                <div className="px-7 py-12 space-y-16 mt-auto">
                    <div className="space-y-4">
                        {/* <Input className="border border-black" type="search" placeholder="Type Something..." />
                        <Button variant="secondary" className="border border-black"><SearchIcon className="mr-2 w-5 h-5" />Search</Button> */}
                        <Avatar className="p-5 border border-secondary mx-auto bg-white w-28 h-28">
                            <AvatarImage src="/Logo_GEN-A.png" />
                            <AvatarFallback>NO</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-3xl font-bold">Details</h3>
                        <ul className="space-y-4 font-semibold">
                            <li><Map className="w-6 h-6 mr-2" />{config?.alamatOrganisasi}</li>
                            <li><Mails className="w-6 h-6 mr-2" />{config?.emailOrganisasi}</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-3xl font-bold">Socials</h3>
                        <ul className="flex flex-col space-y-4 font-semibold">
                            <li className="inline-block">
                                <Link className="flex gap-3 items-center hover:scale-105 duration-200" href={config.URLinstagram} target="_blank">
                                    <Image
                                        src="/Instagram_flower.png"
                                        alt="sosmed"
                                        height={45}
                                        width={45}
                                    />
                                    Instagram
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link className="flex gap-3 items-center hover:scale-105 duration-200" href={config.URLfacebook} target="_blank">
                                    <Image
                                        src="/Facebook_flower.png"
                                        alt="sosmed"
                                        height={45}
                                        width={45}
                                    />
                                    Facebook
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link className="flex gap-3 items-center hover:scale-105 duration-200" href={config.URLyoutube} target="_blank">
                                    <Image
                                        src="/Youtube_flower.png"
                                        alt="sosmed"
                                        height={45}
                                        width={45}
                                    />
                                    Youtube
                                </Link>
                            </li>
                            {/* <li className="inline-block">
                                <Link className="flex gap-3 items-center hover:scale-105 duration-200" href="#">
                                    <Image
                                        src="/twitter-icon.png"
                                        alt="sosmed"
                                        height={45}
                                        width={45}
                                    />
                                    Twitter
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="px-16 border-t-2 border-t-black bg-white text-center text-slate-500 py-4 drop-shadow-md text-sm dark:text-white">
                    Copyright &copy; {new Date().getFullYear()} Muhammad Alim Kakani |
                    Freelance for Money and Happyness
                </div>
            </footer>

            <footer className="hidden sm:block lg:hidden footer">
                <div className="px-7 pt-12 pb-0 space-y-16 mt-auto">
                    <div className="grid grid-cols-3 gap-16 items-center">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Dukung Kami</h3>
                            <p>Kami terus berusaha untuk membuat dunia menjadi tempat yang lebih baik</p>
                        </div>
                        <div className="space-y-2 text-center">
                            {/* <Input type="search" className="border-black" placeholder="Search something here..." />
                            <Button variant="third" className="hover:bg-gray-900/80">Search</Button> */}
                            <Avatar className="p-5 border border-secondary mx-auto bg-white w-28 h-28">
                                <AvatarImage src="/Logo_GEN-A.png" />
                                <AvatarFallback>NO</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="font-semibold">
                            <ul className="space-y-5">
                                <li className="flex justify-end items-center text-sm">{config?.alamatOrganisasi} <Map className="ml-3 w-7 h-7 flex-shrink-0" /></li>
                                <li className="flex justify-end items-center text-sm">{config?.emailOrganisasi} <Mails className="ml-3 w-7 h-7 flex-shrink-0" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 flex justify-around items-center rounded-3xl bg-white/70 shadow-md max-w-lg mx-auto">
                        <Button
                            asChild
                            className="rounded-full overflow-visible hover:scale-110 hover:shadow"
                            size="icon"
                            variant="link"
                        >
                            <Link href={config.URLfacebook} target="_blank">
                                <Image
                                    src="/Facebook_flower.png"
                                    alt="sosmed"
                                    height={45}
                                    width={45}
                                />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="rounded-full overflow-visible hover:scale-110 hover:shadow"
                            size="icon"
                            variant="link"
                        >
                            <Link href={config.URLinstagram} target="_blank">
                                <Image
                                    src="/Instagram_flower.png"
                                    alt="sosmed"
                                    height={45}
                                    width={45}
                                />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="rounded-full overflow-visible hover:scale-110 hover:shadow"
                            size="icon"
                            variant="link"
                        >
                            <Link href={config.URLyoutube} target="_blank">
                                <Image
                                    src="/Youtube_flower.png"
                                    alt="sosmed"
                                    height={45}
                                    width={45}
                                />
                            </Link>
                        </Button>
                        {/* <Button
                            asChild
                            className="rounded-full overflow-visible hover:scale-110 hover:shadow"
                            size="icon"
                            variant="link"
                        >
                            <Link href="#">
                                <Image
                                    src="/twitter-icon.png"
                                    alt="sosmed"
                                    height={45}
                                    width={45}
                                />
                            </Link>
                        </Button> */}
                    </div>
                    <div className="px-16 border-t-2 rounded-t-full border-t-black bg-white text-center text-slate-500 py-4 drop-shadow-md text-sm dark:text-white">
                        Copyright &copy; {new Date().getFullYear()} Muhammad Alim Kakani |
                        Gen-A Operator
                    </div>
                </div>
            </footer>
            <footer className="hidden lg:block footer">
                <div className="px-7 pt-32 pb-0 space-y-16 mt-auto relative">
                    <div className="absolute top-0 w-[610px] flex justify-center m-auto right-0 left-0 bg-white h-[17.8rem] rounded-b-full border-b-4 border-black">
                        <div className="space-y-2 grow mx-32 mt-16 flex justify-center">
                            {/* <Input type="search" className="border-primary" placeholder="Search something here..." />
                            <Button className="border border-primary">Search</Button> */}
                            <Avatar className="p-5 border-2 border-secondary bg-white w-28 h-28">
                                <AvatarImage src="/Logo_GEN-A.png" />
                                <AvatarFallback>NO</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                        <div className="space-y-4 max-w-xs">
                            <h3 className="text-2xl font-semibold">Dukung Kami</h3>
                            <p className="text-lg">Kami terus berusaha untuk membuat dunia menjadi tempat yang lebih baik</p>
                            <div className="py-10">
                            </div>
                        </div>
                        <div className="space-y-2 self-end">
                            <div className="p-4 flex justify-around items-center rounded-3xl bg-white/70 shadow-md max-w-lg mx-auto">
                                <Button
                                    asChild
                                    className="rounded-full overflow-visible hover:scale-110 hover:shadow"
                                    size="icon"
                                    variant="link"
                                >
                                    <Link href={config.URLfacebook} target="_blank">
                                        <Image
                                            src="/Facebook_flower.png"
                                            alt="sosmed"
                                            height={45}
                                            width={45}
                                        />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    className="rounded-full overflow-visible hover:scale-110 hover:shadow"
                                    size="icon"
                                    variant="link"
                                >
                                    <Link href={config.URLinstagram} target="_blank">
                                        <Image
                                            src="/Instagram_flower.png"
                                            alt="sosmed"
                                            height={45}
                                            width={45}
                                        />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    className="rounded-full overflow-visible hover:scale-110 hover:shadow"
                                    size="icon"
                                    variant="link"
                                >
                                    <Link href={config.URLyoutube} target="_blank">
                                        <Image
                                            src="/Youtube_flower.png"
                                            alt="sosmed"
                                            height={45}
                                            width={45}
                                        />
                                    </Link>
                                </Button>
                                {/* <Button
                                    asChild
                                    className="rounded-full overflow-visible hover:scale-110 hover:shadow"
                                    size="icon"
                                    variant="link"
                                >
                                    <Link href="#">
                                        <Image
                                            src="/twitter-icon.png"
                                            alt="sosmed"
                                            height={45}
                                            width={45}
                                        />
                                    </Link>
                                </Button> */}
                            </div>
                        </div>
                        <div className="font-semibold">
                            <ul className="space-y-10">
                                <li className="flex justify-end text-sm items-center">{config?.alamatOrganisasi} <Map className="ml-3 w-7 h-7 flex-shrink-0" /></li>
                                <li className="flex justify-end text-base items-center">{config?.emailOrganisasi} <Mails className="ml-3 w-7 h-7 flex-shrink-0" /></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-16 max-w-2xl mx-auto border-t-2 rounded-t-full border-t-black bg-white text-center text-slate-500 py-4 drop-shadow-md text-sm dark:text-white">
                        Copyright &copy; {new Date().getFullYear()} Muhammad Alim Kakani |
                        Gen-A Operator
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer