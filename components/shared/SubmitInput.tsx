import React, { ReactNode } from "react";
import { Button } from "../ui/button";

type tSubmitInputProps = {
  type: "text" | "email" | "search";
  title: string;
  placeholder: string;
  buttonIcon: ReactNode;
};
const SubmitInput = ({
  buttonIcon,
  placeholder,
  title,
  type,
}: tSubmitInputProps) => {
  return (
    <div className="flex justify-between items-end border-b-[0.5px]">
      <input
        type={type}
        name={title}
        className="py-2 w-[80%] focus-visible:outline-none placeholder:tracking-wider placeholder:font-semibold"
        placeholder={placeholder}
      />
      <Button className="px-4 py-2">
        {buttonIcon}
      </Button>
    </div>
  );
};

export default SubmitInput;
