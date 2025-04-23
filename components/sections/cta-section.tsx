import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAProps {
    title: string
    subtitle: string
    buttons: Array<{
        label: string
        href: string
    }>
}

export function CTASection({ title, subtitle, buttons }: CTAProps) {
    return (
        <section className="py-8 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">{subtitle}</p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        {buttons.map((btn, i) => (
                            <Link key={i} href={btn.href}>
                                <Button
                                    size="lg"
                                    className={i === 0 ? "bg-primary hover:bg-primary/90" : ""}
                                    variant={i === 1 ? "outline" : "default"}
                                >
                                    {btn.label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
