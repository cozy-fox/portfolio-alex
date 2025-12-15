import { useEffect, useState } from "react"
import { socialMedia } from "../../data"
import Title from "../Title"
import LinkListItem from "./LinkListItem"

export default function Stats() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="links" />
      <ul className="px-12 py-8 mb-8 space-y-6">
        {socialMedia.map((sm) => (
          <LinkListItem key={sm.id} socialMedia={sm} />
        ))}
      </ul>
    </section>
  )
}
