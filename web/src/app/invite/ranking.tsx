import Image from 'next/image'
import medalCooper from '../../assets/Medal_3.svg'
import medalGold from '../../assets/Medal_1.svg'
import medalSilver from '../../assets/Medal_2.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-sm leading-none text-gray-300">
            <span className="font-semibold">1&ordm;</span> | Diego Viana
          </span>
          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1030
          </span>
          <Image src={medalGold} alt="" className="absolute top-0 right-8" />
        </div>
        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-sm leading-none text-gray-300">
            <span className="font-semibold">2&ordm;</span> | João Fernandes
          </span>
          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1030
          </span>
          <Image src={medalSilver} alt="" className="absolute top-0 right-8" />
        </div>
        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-sm leading-none text-gray-300">
            <span className="font-semibold">3&ordm;</span> | Pedro Luz
          </span>
          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1030
          </span>
          <Image src={medalCooper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
