import { ComponentProps, ReactNode } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

const ButtonIcon = (props: IconButtonProps) => {
  return (
    <button
      className="text-blue hover:bg-blue h-12 cursor-pointer rounded-md bg-gray-500 p-1.5 transition-colors duration-300 hover:text-gray-900"
      {...props}
    />
  )
}

export default ButtonIcon
