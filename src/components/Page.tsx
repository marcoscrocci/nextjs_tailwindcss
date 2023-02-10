import React from "react";

export interface PageProps {
    children: React.ReactNode
}

export default function Page(props: PageProps) {
    return (
        <div className={`
            col-center
            bg-default
            text-white
            h-screen
        `}>
            {props.children}
        </div>
    )
}
