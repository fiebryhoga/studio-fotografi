import React from "react";

export default function StudioLogo({ variant = "dark" }) {
    const isLightOnDark = variant === "light";

    return (
        <div className="flex items-center gap-2.5 select-none group cursor-pointer">
            <span
                className={`text-2xl font-extrabold tracking-tight transition-colors ${
                    isLightOnDark ? "text-white" : "text-zinc-950"
                }`}
            >
                GF
            </span>
            <div className={`border-l pl-2.5 py-0.5 flex flex-col justify-center ${
                isLightOnDark ? "border-zinc-700" : "border-zinc-300"
            }`}>
                <span
                    className={`text-[11px] font-bold uppercase tracking-[0.25em] leading-none ${
                        isLightOnDark ? "text-zinc-300" : "text-zinc-900"
                    }`}
                >
                    STUDIO
                </span>
                <span
                    className={`text-[9px] font-medium uppercase tracking-[0.12em] mt-0.5 leading-none ${
                        isLightOnDark ? "text-zinc-500" : "text-zinc-400"
                    }`}
                >
                    Photography
                </span>
            </div>
        </div>
    );
}
