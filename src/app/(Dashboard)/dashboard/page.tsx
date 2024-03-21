import { Suspense } from "react"
import CardStatus from "@/components/DashboardComponent/CardStatus";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CardSkeleton from "@/components/CardSkeleton";

export default function Home() {
  return (
    <section className="space-y-5">
      <Alert>
        <AlertTitle>Hai User!</AlertTitle>
        <AlertDescription>
          Selamat datang di halaman dashboard yang sederhana dan cakep ini
        </AlertDescription>
      </Alert>
      <div className="flex flex-wrap justify-center gap-14">
        <CardStatus />
      </div>
    </section>
  );
}
