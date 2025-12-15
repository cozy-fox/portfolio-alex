import AboutMe from "./AboutMe"
import Facts from "./Facts"
import MyServices from "./MyServices"
import Testimonial from "../Testimonial"
import Title from "../Title"
import { quoteData } from "../../data"

export default function About() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="about me" />
      <AboutMe />

      <Title name="my services" />
      <MyServices />

      <Title name="quote" />
      <Testimonial testimonial={quoteData} />

      <Title name="fun facts" />
      <Facts />
    </section>
  )
}
