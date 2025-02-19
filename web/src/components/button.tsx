import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="text-blue hover:bg-blue flex h-12 w-full cursor-pointer items-center justify-between rounded-xl bg-gray-500 px-5 font-semibold transition-colors duration-300 hover:text-gray-900">
      {children}
    </button>
  )
}

export default Button
