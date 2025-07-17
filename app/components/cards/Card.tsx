
interface CardProps {
  id: number
  title: string
  paragraph: string
}

export function Card({id, title, paragraph}: CardProps) {
  return (
    <>
    <div className=" h-full bg-white2 text-bluedark rounded-xl border-[1px]
    border-red2 p-8 max-md768:p-6">
      <span className="hidden">{id}</span>
      <h4 className="text-3xl font-semibold mb-6 mt-2 max-lg1280:text-2xl">{title}</h4>
      <p className="text-lg font-normal max-lg1280:text-base">{paragraph}</p>
    </div>
    </>
  )
}
