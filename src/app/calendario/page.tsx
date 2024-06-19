"use client"
//TODO:18 meses condicional, zona de riesgo Fiebre amarilla (altera las key)
//TODO:Iniciar completar esquema solo visible si no está completada antes (A partir de los 15 años altera las key)
//TODO: Agregar Otras cuando se inició sesión
import { Accordion, AccordionItem, Card, CardBody, CardHeader } from "@nextui-org/react"; 
import { VaccineCheckbox } from "../components/VaccineCheckbox";

export default function CalendarHome() {

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small p-4 bg-[#fafafa] grid gap-6",
  };

  return (
    <main className="max-w-5xl m-auto min-h-screen p-6 sm:py-24 sm:px-6">
      <article className="w-full flex flex-col gap-4 items-center">
        <Card shadow="none" fullWidth className="p-6 gap-4 md:h-full">
          <CardHeader className="flex justify-center p-0">
            <h1 className="text-lg font-semibold">Calendario de vacunación niños/as y adolescentes</h1>
          </CardHeader>
          <CardBody className="p-0">
            <Accordion className="grid" itemClasses={itemClasses}>
              <AccordionItem key="1" aria-label="Recién nacidos" title="Recién nacidos">
                <VaccineCheckbox code="BCG" name="Tuberculosis" note="Única dosis" />
                <VaccineCheckbox code="HB" name="Hepatitis B" note="Dosis neonatal" />
              </AccordionItem>
              <AccordionItem key="2" aria-label="2 meses" title="2 meses">
                <VaccineCheckbox code="Neumococo VCN13" name="Neumococo conjugada 13 valente" note="Primera dosis" />
                <VaccineCheckbox code="DTP-HB-Hib" name="Quíntuple/pentavalente (Difteria + Tétanos + Pertussis + Hib + Hepatitis B)" note="Primera dosis" />
                <VaccineCheckbox code="IPV" name="Antipoliomielítica Inactivada" note="Primera dosis" />
                <VaccineCheckbox code="Rotavirus" name="Rotavirus" note="Primera dosis" />
              </AccordionItem>
              <AccordionItem key="3" aria-label="3 meses" title="3 meses">
                <VaccineCheckbox code="ACYW" name="Meningococo" note="Primera dosis" />
              </AccordionItem>
              <AccordionItem key="4" aria-label="4 meses" title="4 meses">
                <VaccineCheckbox code="Neumococo VCN13" name="Neumococo conjugada 13 valente" note="Segunda dosis" />
                <VaccineCheckbox code="DTP-HB-Hib" name="Quíntuple/pentavalente (Difteria + Tétanos + Pertussis + Hib + Hepatitis B)" note="Segunda dosis" />
                <VaccineCheckbox code="IPV" name="Antipoliomielítica Inactivada" note="Segunda dosis" />
                <VaccineCheckbox code="Rotavirus" name="Rotavirus" note="Segunda dosis" />
              </AccordionItem>
              <AccordionItem key="5" aria-label="5 meses" title="5 meses">
                <VaccineCheckbox code="ACYW" name="Meningococo" note="Segunda dosis" />
              </AccordionItem>
              <AccordionItem key="6" aria-label="6 meses" title="6 meses">
                <VaccineCheckbox code="DTP-HB-Hib" name="Quíntuple/pentavalente (Difteria + Tétanos + Pertussis + Hib + Hepatitis B)" note="Tercera dosis" />
                <VaccineCheckbox code="IPV" name="Antipoliomielítica Inactivada" note="Tercera dosis" />
              </AccordionItem>
              <AccordionItem key="7" aria-label="6 a 24 meses" title="6 a 24 meses">
                <VaccineCheckbox code="Antigripal" name="Primera vacunación de antigripal" note="Primera dosis" />
                <VaccineCheckbox code="Antigripal" name="Primera vacunación de antigripal" note="Segunda dosis" />
              </AccordionItem>
              <AccordionItem key="8" aria-label="12 meses" title="12 meses">
                <VaccineCheckbox code="Neumococo VCN13" name="Neumococo conjugada 13 valente" note="Refuerzo" />
                <VaccineCheckbox code="HA" name="Hepatitis A" note="Única dosis" />
                <VaccineCheckbox code="SRP" name="Triple viral" note="Primera dosis" />
              </AccordionItem>
              <AccordionItem key="9" aria-label="15 meses" title="15 meses">
                <VaccineCheckbox code="ACYW" name="Meningococo" note="Refuerzo" />
                <VaccineCheckbox code="Varicela" name="Varicela monovalente" note="Primera dosis" />
              </AccordionItem>
              <AccordionItem key="10" aria-label="15 a 18 meses" title="15 a 18 meses">
                <VaccineCheckbox code="DTP-HB-Hib" name="Quíntuple/pentavalente (Difteria + Tétanos + Pertussis + Hib + Hepatitis B)" note="Primer refuerzo" />
              </AccordionItem>
              <AccordionItem key="11" aria-label="18 meses" title="18 meses">
                <VaccineCheckbox code="FA" name="Fiebre amarilla" note="Primera dosis" />
              </AccordionItem>
              <AccordionItem key="12" aria-label="5 años" title="5 años">
                <VaccineCheckbox code="IPV" name="Antipoliomielítica Inactivada" note="Primer refuerzo" />
                <VaccineCheckbox code="SRP" name="Triple viral" note="Segunda dosis" />
                <VaccineCheckbox code="Varicela" name="Varicela monovalente" note="Segunda dosis" />
                <VaccineCheckbox code="DTP" name="Triple bacteriana" note="Refuerzo" />
              </AccordionItem>
              <AccordionItem key="13" aria-label="11 años" title="11 años">
                <VaccineCheckbox code="ACYW" name="Meningococo" note="Única dosis" />
                <VaccineCheckbox code="dTpa" name="Triple bacteriana acelular" note="Única dosis" />
                <VaccineCheckbox code="VPH" name="Virus del Papiloma Humano" note="Primera dosis" />
                <VaccineCheckbox code="FA" name="Fiebre amarilla" note="Refuerzo para quienes iniciaron esquema entre los 18 y 24 meses" />
                <VaccineCheckbox code="HB" name="Hepatitis B" note="Iniciar o completar esquema" />
                <VaccineCheckbox code="SRP" name="Triple viral" note="Iniciar o completar esquema" />
              </AccordionItem>
              <AccordionItem key="14" aria-label="A partir de los 15 años" title="A partir de los 15 años">
                <VaccineCheckbox code="HB" name="Hepatitis B" note="Iniciar o completar esquema" />
                <VaccineCheckbox code="SR o SRP" name="Doble viral o Triple viral" note="Iniciar o completar esquema" />
                <VaccineCheckbox code="FA" name="Fiebre amarilla" note="Única dosis, residentes o viajeros a zona de riesgo que no hayan recibido la vacuna antes" />
                <VaccineCheckbox code="FHA" name="Fiebre hemorrágica argentina" note="Única dosis, residentes o trabajadores en zona de riesgo que no hayan recibido la vacuna antes" />
              </AccordionItem>
              <AccordionItem key="15" aria-label="Antigripal" title="Antigripal">
                <VaccineCheckbox code="Antigripal" name="Antigripal" note="Dosis anual (a partir de los 15 años), recomendada para personas con factores de riesgo" />
              </AccordionItem>
              {/* <AccordionItem key="16" aria-label="Otras" title="Otras">
                
              </AccordionItem> */}
            </Accordion>
          </CardBody>
        </Card>
      </article>
    </main>
  );
}
