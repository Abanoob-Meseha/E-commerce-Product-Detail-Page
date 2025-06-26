// primary - secondary - ghost
import React, { ReactNode } from 'react'

type tButtonProps = {
  children: ReactNode,
  type?: "primary" | "secondary" | "ghost",
  className?: string
}
const Button = ({children , type= 'primary' , className = ""}: tButtonProps) => {
  const baseStyle = "flex items-center justify-center py-1 px-2 rounded-[8px]"
  let typeStyle = ""
  switch (type) {
    case "primary":
      typeStyle = "bg-primary text-white"
      break;
    case "secondary":
      typeStyle = "bg-background-secondary"
      break;
    case "ghost":
      typeStyle = "bg-transparent border-1 border-primary"
      break;
    default:
      break;
  }
  return (
    <button className={`${baseStyle} ${typeStyle} ${className}`}>
      {children}
    </button>
  )
}

export default Button