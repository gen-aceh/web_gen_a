import { Skeleton } from "./ui/skeleton"

const CardSkeleton = () => {
  return (
    <div className="min-w-[300px] min-h-[150px] mt-8">
        <Skeleton className="absolute h-16 w-16 left-4 -top-5 rounded-lg"/>
        <div className="items-end">
            <Skeleton className="h-4 w-3" />
            <Skeleton className="h-4 w-10" />
        </div>
        <Skeleton className="h-1 w-[90%] mx-auto"/>
        <div className="flex justify-between mt-2 items-center">
            <Skeleton className="h-4 w-10"/>
            <Skeleton className="h-4 w-3"/>
        </div>
    </div>
  )
}

export default CardSkeleton