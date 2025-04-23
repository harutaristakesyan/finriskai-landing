import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingPlan {
    name: string
    price: string
    features: string[]
    button: string
    highlighted?: boolean
}

interface PricingProps {
    title: string
    subtitle: string
    plans: PricingPlan[]
}

export function PricingSection({ title, subtitle, plans }: PricingProps) {
    return (
        <section id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">{subtitle}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, i) => (
                        <Card key={i} className={plan.highlighted ? "border-2 border-primary" : ""}>
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">{plan.name}</CardTitle>
                                <div className="text-3xl font-bold mt-2">{plan.price}</div>
                            </CardHeader>
                            <CardContent className="space-y-2 px-6 pb-6">
                                <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                                    {plan.features.map((feature, j) => (
                                        <li key={j}>{feature}</li>
                                    ))}
                                </ul>
                                <Button className="w-full mt-4" variant={plan.highlighted ? "default" : "outline"}>
                                    {plan.button}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
