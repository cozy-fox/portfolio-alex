import {
  BsAwardFill,
  BsChat,
  BsGlobe,
} from "react-icons/bs"
import Fact from "./Fact"

export default function Facts() {
  return (
    <ul className="grid grid-cols-2 mb-12 logos sm:grid-cols-1">
      <Fact Icon={BsChat} desc="Multilinguist - English (native), Spanish (native), French (intermediate), Chinese (learning), Japanese (learning)" border />
      <Fact Icon={BsAwardFill} desc="Valedictorian with GPA 3.7 at UT Austin" border />
      <Fact Icon={BsGlobe} desc="Winner of “Best Use of AI” at HackTX 2023" border />
    </ul>
  )
}
