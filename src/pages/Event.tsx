import { HandPointing } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    return (
        <div className="flex flex-col min-h-screen">
            <Header onNavOpen={setIsNavOpen} />
            <main className="flex flex-1">
                {(slug && !isNavOpen)
                    ? <Video lessonSlug={slug} />
                    : (
                        <div className="flex-1 flex items-center gap-4 justify-center bg-blur bg-cover bg-no-repeat text-stone-400">
                            <h1 className="text-3xl font-sans">
                                Selecione uma aula
                            </h1>
                            <HandPointing size={48} />
                        </div>
                    )
                }
                <Sidebar isNavOpen={isNavOpen} />
            </main>
        </div>
    )
}

// fazer componente footer (repetir)
// botar aniamcao de fade in na subscribe
// nav burguer menu