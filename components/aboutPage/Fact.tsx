import MyIcon from "../MyIcon"

interface Props {
  Icon: any
  desc: string
  border?: boolean
}

export default function Fact({ Icon, desc, border }: Props) {
  return (
    <li
      className={`w-full h-fit flex items-center pt-8 px-6 ${border && "relative vCustomLine before:right-0"
        }`}
    >
      <div className="flex-shrink-0 mr-4">
        <MyIcon Icon={Icon} />
      </div>
      <p className="text-2xl text-gray-300 leading-relaxed tracking-wide">
        {desc}
      </p>
    </li>
  )
}
