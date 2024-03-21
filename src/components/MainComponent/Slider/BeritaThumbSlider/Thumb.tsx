import Image from "next/image"

type PropType = {
    selected: boolean
    imgSrc: string
    index: number
    onClick: () => void
}

const Thumb = (props: PropType) => {
    const { selected, imgSrc, index, onClick } = props

    return (
        <div
            className={`rounded-md flex-0 flex-shrink-0 w-28 md:w-1/5 min-w-0 px-${selected ? '0' : '[1rem]'} relative ${selected ? 'opacity-100' : 'opacity-20 transition-opacity duration-200'} bg-slate-500`}
        >
            <button
                onClick={onClick}
                className="block appearance-none bg-transparent cursor-pointer border-0 p-0 m-0 w-full"
                type="button"
            >
                <Image
                    className="block w-full"
                    src={imgSrc}
                    alt="Your alt text"
                    width={1000}
                    height={600}
                />
            </button>
        </div>
    )
}

export default Thumb