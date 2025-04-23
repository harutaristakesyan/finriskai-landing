import type { JSX } from "react"
import {
    BarChart3,
    Brain,
    BarChartIcon as ChartNoAxesCombined,
    MoveLeftIcon as PairLeft,
    Search,
    ShieldCheck,
    Shirt,
    TrendingUp,
} from "lucide-react"

export const iconMap: Record<string, JSX.Element> = {
    ShieldCheck: <ShieldCheck className="h-6 w-6 text-primary" />,
    TrendingUp: <TrendingUp className="h-6 w-6 text-primary" />,
    ChartNoAxesCombined: <ChartNoAxesCombined className="h-6 w-6 text-primary" />,
    BarChart3: <BarChart3 className="h-6 w-6 text-primary" />,
    Search: <Search className="h-6 w-6 text-primary" />,
    MoveLeftIcon: <PairLeft className="h-6 w-6 text-primary" />,
    Shirt: <Shirt className="h-6 w-6 text-primary" />,
    Brain: <Brain className="h-5 w-5" />,
}
