import classNames from "classnames";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

interface HeaderProps {
    onNavOpen: (isNavOpen: boolean) => void
}

export function Header({ onNavOpen }: HeaderProps) {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    useEffect(() => {
        onNavOpen(isNavOpen)
    }, [isNavOpen])

    return (
        <header className="w-full py-5 flex items-center justify-between px-10 bg-gray-700 border-b border-gray-600">
            <Logo />
            <div className="bg-transparent sm:max-h-10 sm:w-10 max-h-6 w-9 block lg:hidden relative" onClick={() => setIsNavOpen(!isNavOpen)}>
                <span className={classNames("bg-blue-500 block h-[3px] w-full absolute duration-300", {
                    'rotate-45 transition-transform': isNavOpen,
                    'sm:my-3 my-2.5 rotate-0 transition-all': !isNavOpen
                })}></span>
                <span className={classNames("bg-blue-500 block h-[3px] w-full absolute", {
                    'hidden': isNavOpen,
                })}></span>
                <span className={classNames("bg-blue-500 block h-[3px] w-full absolute duration-300", {
                    '-rotate-45 transition-transform': isNavOpen,
                    'sm:-my-3 -my-2.5 rotate-0 transition-all': !isNavOpen
                })}></span>
            </div>
        </header>
    )
}