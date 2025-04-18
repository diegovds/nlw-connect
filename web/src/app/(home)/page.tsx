import { Radio } from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/Logo.svg'
import SubscriptionForm from './subscription-form'

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col justify-center gap-16">
      <div className="flex flex-col items-center gap-8 md:items-start">
        <Image src={logo} alt="devstage" width={108.5} height={30} />
        <h1 className="font-heading flex flex-col text-center text-4xl leading-none font-medium md:text-left md:text-7xl">
          <span className="text-blue">CodeCraft </span>
          Summit 2025
        </h1>
      </div>
      <div className="flex flex-col items-stretch gap-5 md:flex-row">
        <div className="flex-1 space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-semibold text-gray-200">
              Sobre o evento
            </h2>
            <span className="text-purple flex items-center gap-2 text-xs font-semibold">
              <Radio className="size-5" /> AO VIVO
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </div>
        <SubscriptionForm />
      </div>
    </div>
  )
}
