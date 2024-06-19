"use client"

import { Button, Card, CardBody, CardHeader, Link, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";

const CalendarCard = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card shadow="none" fullWidth className="bg-green p-6 gap-4 md:h-full">
        <CardHeader className="flex justify-center p-0">
          <h1 className="text-white text-lg font-semibold">Calendario de vacunación</h1>
        </CardHeader>
        <CardBody className="p-0">
          <Button variant="bordered" onPress={onOpen} href="#" radius="md" className="text-white text-base">Consultar</Button>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Calendarios de vacunación</ModalHeader>
              <ModalBody className="pb-5">
                <Link href="/calendario" color="foreground">Niños/as y adolescentes</Link>
                <Link href="/calendario-adultos" color="foreground">Adultos</Link>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default CalendarCard;