import { Card, CardBody, CardHeader } from "@nextui-org/react";
import SelectVaccines from "./components/SelectVaccines";
import StagesCard from "./components/StagesCard";
import CalendarCard from "./components/CalendarCard";




export default function Home() {
  return (
    <main className="max-w-5xl m-auto min-h-screen  p-6 sm:py-24 sm:px-6">
      <article className="w-full flex flex-col gap-4 items-center md:grid md:grid-cols-3 md:content-stretch">
        <CalendarCard />
        <StagesCard />
        <Card shadow="none" fullWidth className="p-6 gap-4 md:col-span-2">
          <CardHeader className="p-0">
            <h1 className="text-lg font-semibold">Información sobre las vacunas</h1>
          </CardHeader>
          <CardBody className="p-0">
            <SelectVaccines></SelectVaccines>
          </CardBody>
        </Card>
        <Card shadow="none" fullWidth className="p-6 gap-4">
          <CardHeader className="p-0">
            <h1 className="text-lg font-semibold">Contraindicaciones</h1>
          </CardHeader>
          <CardBody className="p-0">
            <SelectVaccines></SelectVaccines>
          </CardBody>
        </Card>
      </article>
    </main>
  );
}
