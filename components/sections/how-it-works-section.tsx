import OrbitIcons from "@/components/OrbitIcons"
import {iconMap} from "@/components/ui/icon-map"

interface Step {
    icon: string
    title: string
    description: string
}

interface HowItWorksProps {
    title: string
    subtitle: string
    steps: Step[]
}

export function HowItWorksSection({title, subtitle, steps}: HowItWorksProps) {
    return (
        <section id="how-it-works" className="bg-muted">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It
                            Works
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">{subtitle}</p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        {steps.map((step, i) => (
                            <div key={i} className="mb-6">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        {iconMap[step.icon]}
                                    </div>
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                </div>
                                <p className="text-muted-foreground mt-2">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <OrbitIcons/>
                </div>
            </div>
        </section>
    )
}
