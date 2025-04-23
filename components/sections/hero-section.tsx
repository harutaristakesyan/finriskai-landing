import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {ArrowRight} from "lucide-react"

interface HeroProps {
    title: string
    subtitle: string
    cta: Array<{
        label: string
        href: string
    }>
    image: {
        src: string
        alt: string
    }
}

export function HeroSection({title, subtitle, cta, image}: HeroProps) {
    return (
        <section className="bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{title}</h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">{subtitle}</p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            {cta.map((button, i) => (
                                <Link key={i} href={button.href}>
                                    <Button size="lg" variant="default">
                                        {button.label}
                                        {button.label.includes("Get") && <ArrowRight className="ml-2 h-4 w-4"/>}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <Image
                        src={image.src || "/placeholder.svg"}
                        width={550}
                        height={550}
                        alt={image.alt}
                        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
