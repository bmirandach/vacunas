"use client"

import { Accordion, AccordionItem, Card, CardBody, CardHeader } from "@nextui-org/react";
import { VaccineCheckbox } from "../components/VaccineCheckbox";

export default function AdultCalendarHome() {

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small p-4 bg-[#fafafa] grid gap-6",
  };

  return (
    <main className = "max-w-5xl m-auto min-h-screen p-6 sm:py-24 sm:px-6">
      <Card shadow="none" fullWidth className="p-6 gap-4 md:h-full">
        <CardHeader className="flex justify-center p-0">
          <h1 className="text-lg font-semibold">Calendario de vacunación personas adultas</h1>
        </CardHeader>
        <CardBody className="p-0">
          <Accordion className="grid" itemClasses={itemClasses}>
            {/* <AccordionItem key="1" aria-label="Antigripal" title="Antigripal">
              <VaccineCheckbox code="Antigripal" name="Antigripal" note="Dosis anual, recomendada para personas con factores de riesgo" />
            </AccordionItem> */}
            <AccordionItem key="2" aria-label="Doble bacteriana" title="Doble bacteriana">
              <VaccineCheckbox code="dT" name="Doble bacteriana" note="Refuerzo cada 10 años" />
            </AccordionItem>
            <AccordionItem key="3" aria-label="Factores de riesgo" title="Factores de riesgo">
              <VaccineCheckbox code="Antigripal" name="Antigripal" note="Dosis anual" />
              <VaccineCheckbox code="Neumococo VCN13" name="Neumococo conjugada 13 valente" note="Esquema secuencial" />
              <VaccineCheckbox code="Neumococo VPN23" name="Neumococo polisacárida 23 valente" note="Esquema secuencial" />
            </AccordionItem>
            <AccordionItem key="4" aria-label="Iniciar o completar esquema" title="Iniciar o completar esquema">
              <VaccineCheckbox code="HB" name="Hepatitis B" note="Iniciar o completar esquema" />
              <VaccineCheckbox code="SR o SRP" name="Doble viral o Triple viral" note="Iniciar o completar esquema" />
            </AccordionItem>
            <AccordionItem key="5" aria-label="Zona de riesgo" title="Zona de riesgo">
              <VaccineCheckbox code="FA" name="Fiebre amarilla" note="Única dosis, residentes o viajeros que no hayan recibido la vacuna antes" />
              <VaccineCheckbox code="FHA" name="Fiebre hemorrágica argentina" note="Única dosis, residentes o trabajadores que no hayan recibido la vacuna antes" />
            </AccordionItem>
            <AccordionItem key="6" aria-label="Embarazo" title="Embarazo">
              <VaccineCheckbox code="Antigripal" name="Antigripal" note="Una dosis" />
              <VaccineCheckbox code="dTpa" name="Triple bacteriana acelular" note="Una dosis" />
              <VaccineCheckbox code="VSR" name="Virus sincicial respiratorio" note="Única dosis" />
            </AccordionItem>
            <AccordionItem key="7" aria-label="Puerperio" title="Puerperio">
              <VaccineCheckbox code="Antigripal" name="Antigripal" note="Una dosis, si no se recibió en el embarazo" />
            </AccordionItem>
            <AccordionItem key="8" aria-label="Personal de salud" title="Personal de salud">
              <VaccineCheckbox code="Antigripal" name="Antigripal" note="Dosis anual" />
              <VaccineCheckbox code="dTpa" name="Triple bacteriana acelular" note="Una dosis, refuerzo cada 5 años" />
            </AccordionItem>
            <AccordionItem key="9" aria-label="Adultos mayores (65 años y más)" title="Adultos mayores (65 años y más)">
              <VaccineCheckbox code="Antigripal" name="Antigripal" note="Dosis anual" />
              <VaccineCheckbox code="Neumococo VCN13" name="Neumococo conjugada 13 valente" note="Esquema secuencial" />
              <VaccineCheckbox code="Neumococo VPN23" name="Neumococo polisacárida 23 valente" note="Esquema secuencial" />
            </AccordionItem>
          </Accordion>
        </CardBody>
      </Card>
    </main>
  )
} 