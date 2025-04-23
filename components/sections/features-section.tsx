import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { iconMap } from "@/components/ui/icon-map"

interface FeatureItem {
    icon: string
    title: string
    description: string
}

interface FeaturesProps {
    title: string
    subtitle: string
    items: FeatureItem[]
}

export function FeaturesSection({ title, subtitle, items }: FeaturesProps) {
    return (
        <section id="features">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">{subtitle}</p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                    {items.map((item, i) => (
                        <Card key={i}>
                            <CardHeader className="p-4">
                                {iconMap[item.icon]}
                                <CardTitle className="mt-2">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <CardDescription>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
