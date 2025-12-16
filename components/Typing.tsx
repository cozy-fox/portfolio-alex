import Typewriter from "typewriter-effect"

export default function Typing() {
  return (
    <div className="text-center h-8">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<span style="color: #0bf588; font-size: 14px; font-weight: 400;">Python Developer</span>'
            )
            .pauseFor(3500)
            .deleteAll(17)

            .typeString(
              '<span style="color: #0bf588; font-size: 14px; font-weight: 400;">Java/Kotlin Developer</span>'
            )
            .pauseFor(3500)
            .deleteAll(17)

            .typeString(
              '<span style="color: #0bf588; font-size: 14px; font-weight: 400;">AI Powered Web Developer</span>'
            )
            .pauseFor(3500)
            .deleteAll(17)

            .typeString(
              '<span style="color: #0bf588; font-size: 14px; font-weight: 400;">Strong DevOps Experience</span>'
            )
            .pauseFor(3500)
            .deleteAll(17)
            .start()
        }}
        options={{
          autoStart: true,
          loop: true,
          cursor: "",
          delay: 17,
        }}
      />
    </div>
  )
}
