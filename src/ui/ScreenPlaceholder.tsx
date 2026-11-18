type Props = {
  title: string
  description: string
}

export default function ScreenPlaceholder({ title, description }: Props) {
  return (
    <section className="p-6 sm:p-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="text-ink-2 mt-3 max-w-prose">{description}</p>
    </section>
  )
}
