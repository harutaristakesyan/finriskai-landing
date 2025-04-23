import homeData from "@/content/home.json"
import {HeroSection} from "@/components/sections/hero-section"
import {FeaturesSection} from "@/components/sections/features-section"
import {HowItWorksSection} from "@/components/sections/how-it-works-section"
import {CTASection} from "@/components/sections/cta-section"
import {PricingSection} from "@/components/sections/pricing-section"

export default function Home() {
    const {hero, features, how_it_works, cta, pricing} = homeData

    return (
        <div className="flex min-h-screen flex-col">
            <main className=" grid grid-cols-1 gap-14 flex-grow">
                <HeroSection title={hero.title} subtitle={hero.subtitle} cta={hero.cta} image={hero.image}/>

                <FeaturesSection title={features.title} subtitle={features.subtitle} items={features.items}/>

                <HowItWorksSection title={how_it_works.title} subtitle={how_it_works.subtitle}
                                   steps={how_it_works.steps}/>

                <CTASection title={cta.title} subtitle={cta.subtitle} buttons={cta.buttons}/>

                <PricingSection title={pricing.title} subtitle={pricing.subtitle} plans={pricing.plans}/>
            </main>
        </div>
    )
}
