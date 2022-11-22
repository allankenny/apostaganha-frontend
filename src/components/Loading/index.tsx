import { CircleNotch } from "phosphor-react"
export function Loading(){
  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <CircleNotch weight="bold" className="w-6 h-6 animate-spin" />
    </div>
  )
}