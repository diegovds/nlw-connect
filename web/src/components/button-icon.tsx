import { ReactNode } from 'react'

interface IconButtonProps {
  children: ReactNode
}

const ButtonIcon = ({ children }: IconButtonProps) => {
  return (
    <button className="text-blue hover:bg-blue h-12 cursor-pointer rounded-md bg-gray-500 p-1.5 transition-colors duration-300 hover:text-gray-900">
      {children}
    </button>
  )
}

export default ButtonIcon
