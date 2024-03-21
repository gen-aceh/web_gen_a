import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function CardProfile(props : { name: string, jabatan: string }) {
    return (
        <div
            className="shadow-sm shadow-slate-400 px-10 py-16 rounded-3xl flex items-center flex-col gap-7"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2 )" }}
        >
            <div className="relative flex justify-center items-center">
                <Image
                    className="mb-5"
                    src={"/ring_2/ringBlue.png"}
                    width={130}
                    height={130}
                    alt="profile"
                />
                <Avatar className="shadow-sm absolute w-[82px] h-[82px] top-8 left-[21.5px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="text-lg text-center">
                <p>
                    <strong>{props.name}</strong>
                </p>
                <small>
                    <em>{props.jabatan}</em>
                </small>
                <div className="mt-4">
                    <p>
                        <em>
                            &quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Harum excepturi quo obcaecati voluptatum maxime quos quae,
                            molestias eos et commodi&quot;
                        </em>
                    </p>
                </div>
            </div>
        </div>
    );
}