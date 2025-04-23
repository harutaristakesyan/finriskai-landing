'use client';

import React from "react";
import {OrbitItem, OrbitPath} from "react-orbit-component";
import {Banknote, BarChart3, Cloud, DollarSign, LineChart, TrendingUp} from "lucide-react";

const innerItems = [
    {icon: <DollarSign className="w-6 h-6"/>, label: "AI"},
    {icon: <TrendingUp className="w-6 h-6"/>, label: "ML"},
    {icon: <BarChart3 className="w-6 h-6"/>, label: "DS"},
];

const outerItems = [
    {icon: <LineChart className="w-6 h-6"/>, label: "FX"},
    {icon: <Banknote className="w-6 h-6"/>, label: "IB"},
    {icon: <Cloud className="w-6 h-6"/>, label: "AWS"},
];

const SHARED_CLASSNAME = 'w-14 h-14 bg-blue-500 rounded-full flex flex-col items-center justify-center text-white font-bold gap-1';

export default function OrbitIcons() {
    return (
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">

            <OrbitPath type="circle"
                       className="absolute w-[300px] h-[300px] rounded-full border border-muted bg-gradient-to-b from-black/5 via-transparent to-transparent dark:from-white/5">
                {innerItems.map((item, i) => (
                    <OrbitItem
                        key={`outer-${i}`}
                        startAngle={i * 120}
                        anglePerStep={0.2}
                        className={SHARED_CLASSNAME}>
                        {item.icon}
                        <span className="text-xs">{item.label}</span>
                    </OrbitItem>
                ))}
            </OrbitPath>

            <OrbitPath type="circle"
                       className="absolute w-[460px] h-[460px] rounded-full border border-muted bg-gradient-to-b from-black/5 via-transparent to-transparent dark:from-white/5">
                {outerItems.map((item, i) => (
                    <OrbitItem
                        direction='counter-clockwise'
                        key={`outer-${i}`}
                        startAngle={i * 120}
                        anglePerStep={0.2}
                        className="w-14 h-14 bg-gray-800 rounded-full flex flex-col items-center justify-center text-white font-bold gap-1">
                        {item.icon}
                        <span className="text-xs">{item.label}</span>
                    </OrbitItem>
                ))}
            </OrbitPath>

            <div className=" text-center max-w-xs px-4">
                <div className="text-2xl font-bold mb-1">Smart Stocks</div>
                <div className="text-sm text-muted-foreground">
                    Explore insights from AI-powered analysis, global markets, and real-time signals.
                </div>
            </div>
        </div>
    );
}
