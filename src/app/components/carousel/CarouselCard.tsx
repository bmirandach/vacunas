import { Button, Card, CardBody, CardHeader, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";

export interface CarouselCardProps {
  name: string;
  vaccines: string[];
  description: string[];
  vaccines_ex: string[];
  description_ex: string[];
}

export const CarouselCard = ({ name, vaccines, description, vaccines_ex, description_ex }: CarouselCardProps) => {
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card shadow="none" className="p-6 flex-[0_0_220px] gap-4 border border-green min-w-0">
        <CardHeader className="p-0">
          <h1 className="font-semibold">{name}</h1>
        </CardHeader>
        <CardBody className="p-0 flex gap-4">
          <p>Hasta {vaccines.length + vaccines_ex.length} vacunas</p>
          <Button onPress={onOpen} href="#" radius="md" variant="flat" className="bg-green text-white text-base">
            Ver más
          </Button>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody className="pb-4">
                <ul className="vaccine-list">
                  {vaccines.map((vaccine, index) => (
                    <li className="relative" key={index}>
                      {vaccine}{description[index] !== "" && <span className="text-slate-500 text-sm pl-2">{description[index]}</span>}
                    </li>
                  ))}
                  {vaccines_ex.map((vaccine, index) => (
                    <li className="relative potential" key={index}>
                      {vaccine}{description_ex[index] !== "" && <span className="text-slate-500 text-sm pl-2">{description_ex[index]}</span>}
                    </li>
                  ))}
                </ul>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}