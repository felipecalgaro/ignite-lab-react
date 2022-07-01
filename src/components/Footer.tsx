import { GithubLogo } from "phosphor-react"
import RocketseatLogo from "../assets/logo-rocketseat.png"

export function Footer() {
    return (
        <footer>
            <div className="py-8 mt-12 mx-10 border-t border-gray-500 flex items-center md:justify-start justify-center gap-12 flex-wrap">
                <img
                    src={RocketseatLogo}
                    alt="Rocketseat logo"
                />
                <a
                    target="blank"
                    href="https://github.com/felipecalgaro"
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-green-300 transition-colors duration-200"
                >
                    <GithubLogo size={24} />
                    <p className="font-medium text-sm font-sans">Felipe Calgaro</p>
                </a>
                <p className="font-medium text-sm text-center font-sans text-gray-300">Rocketseat - All rights reserved</p>
            </div>
        </footer>
    )
}