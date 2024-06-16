import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Carousel from "./carousel/Carousel";

const Stages = () => {
    return (
      <Card shadow="none" fullWidth className="p-6 gap-4 md:col-span-2">
        <CardHeader className="p-0">
          <h1 className="text-lg font-semibold">Etapas de la vida</h1>
        </CardHeader>
        <CardBody className="p-0 overflow-visible">
          <Carousel options={{ align: 'start' }} />
        </CardBody>
      </Card>
    );
}

export default Stages;