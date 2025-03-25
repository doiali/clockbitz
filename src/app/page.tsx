import Image from "next/image"

export default function Home() {
  return (
    <section className="flex justify-center items-center text-center min-h-[100vh] py-24 border-b">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-3xl sm:text-5xl lg:text-6xl">
          Clockbitz
        </h1>
        <p className="text-2xl mb-2">Time tracking application</p>
        <p className="text-muted-foreground mb-4">Coming soon...</p>
      </div>
    </section>
  )
}
