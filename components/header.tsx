import {LineChart} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Left: Logo + Navigation */}
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <LineChart className="h-6 w-6"/>
                        <span className="text-xl font-bold">FinRisk</span>
                    </div>

                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="gap-6">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="#features"
                                        className="text-sm font-medium hover:underline underline-offset-4"
                                    >
                                        Features
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="#how-it-works"
                                        className="text-sm font-medium hover:underline underline-offset-4">
                                        How It Works
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="#pricing"
                                        className="text-sm font-medium hover:underline underline-offset-4">
                                        Pricing
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right: Buttons */}
                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button size="sm">Register</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
