import {JSX} from "react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowRight, Brain, MoveLeftIcon as PairLeft, Search, Shirt, FootprintsIcon as Socks} from "lucide-react";
import homeData from "@/content/home.json";

const iconMap: Record<string, JSX.Element> = {
    Search: <Search className="h-6 w-6 text-primary" />,
    MoveLeftIcon: <PairLeft className="h-6 w-6 text-primary" />,
    Shirt: <Shirt className="h-6 w-6 text-primary" />,
    Brain: <Brain className="h-5 w-5" />,
};


export default function Home() {
    const {hero, features, how_it_works, cta, footer} = homeData;

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        {hero.title}
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">{hero.subtitle}</p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    {hero.cta.map((button, i) => (
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
                                src={hero.image.src}
                                width={550}
                                height={550}
                                alt={hero.image.alt}
                                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section id="features" className="py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div
                                    className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{features.title}</h2>
                                <p className="max-w-[700px] text-muted-foreground md:text-xl">{features.subtitle}</p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                            {features.items.map((item, i) => (
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

                <section id="how-it-works" className="py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div
                                    className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How
                                    It Works
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{how_it_works.title}</h2>
                                <p className="max-w-[700px] text-muted-foreground md:text-xl">{how_it_works.subtitle}</p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
                            <div className="flex flex-col justify-center space-y-4">
                                {how_it_works.steps.map((step, i) => (
                                    <div key={i}>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                {iconMap[step.icon]}
                                            </div>
                                            <h3 className="text-xl font-bold">{step.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                            <Image
                                src={how_it_works.image.src}
                                width={500}
                                height={400}
                                alt={how_it_works.image.alt}
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-12 md:py-24 lg:py-32 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{cta.title}</h2>
                                <p className="max-w-[700px] text-muted-foreground md:text-xl">{cta.subtitle}</p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                {cta.buttons.map((btn, i) => (
                                    <Link key={i} href={btn.href}>
                                        <Button size="lg" className={i === 0 ? "bg-primary hover:bg-primary/90" : ""}
                                                variant={i === 1 ? "outline" : "default"}>
                                            {btn.label}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t bg-muted/40">
                <div
                    className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
                    <div className="flex items-center gap-2">
                        <Socks className="h-6 w-6 text-primary"/>
                        <span className="text-lg font-bold">{footer.brand}</span>
                    </div>
                    <nav className="flex gap-4 sm:gap-6">
                        {footer.links.map((link, i) => (
                            <Link key={i} href={link.href} className="text-sm hover:underline underline-offset-4">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {footer.brand}. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
