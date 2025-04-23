import {FootprintsIcon as Socks} from "lucide-react";
import Link from "next/link";
import home from '@/content/home.json';

const {footer} = home;

export default function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div
                className="containe mx-auto px-4 flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
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
    );
}
