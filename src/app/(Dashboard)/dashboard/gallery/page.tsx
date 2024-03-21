import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

const Gallery = () => {
  return (
    <div className="min-h-full w-full">
      <Separator className="my-10" />
      <Alert>
        <AlertTitle className="font-semibold">Hai User!</AlertTitle>
        <AlertDescription className="text-lg">
          Untuk Fitur ini Masih dalam Development, sabar ya... <span className="font-semibold">Release Soon</span> insya Allah &#128591;
        </AlertDescription>
      </Alert>
      <Separator className="my-10" />
    </div>
  )
}

export default Gallery