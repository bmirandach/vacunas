'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { vaccines } from "@/data/conditions";

const SelectConditions = () => {
  return (
    <Select label="Seleccione una vacuna" items={vaccines} size="sm" radius="md">
      {({ value, name }) => (<SelectItem key={ value }>{ name }</SelectItem>)}
    </Select>
  )
}

export default SelectConditions;