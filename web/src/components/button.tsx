import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="text-blue hover:bg-blue flex h-12 w-full cursor-pointer items-center justify-between rounded-xl bg-gray-500 px-5 font-semibold transition-colors duration-300 hover:text-gray-900"
      {...props}
    />
  )
}

export default Button
