import { useState } from "react";
import { Checkbox, cn } from "@nextui-org/react"; 

type Props = {
  code: string;
  name: string;
  note: string;
}

export const VaccineCheckbox = ({ code, name,  note } : Props) => {

  const [isSelected, setIsSelected] = useState(false);

  return (
    <Checkbox
      aria-label={name}
      color="success"
      classNames={{
        base: cn(
          "w-full  max-w-full static bg-content1",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-3",
          "border border-l-4 data-[selected=true]:border-l-success ",
        ),
        label: "w-full",
      }}
      isSelected={isSelected}
      onValueChange={setIsSelected}
    >
      <div className="w-full flex flex-col gap-1">
        <h1>{code}</h1>
        <h2 className="text-slate-500 text-sm">{name}</h2>
        <p className="text-slate-500 text-sm italic">{note}</p>
      </div>
    </Checkbox>
  )
}