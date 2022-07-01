import { HandPointing } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
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
                        <div className="flex-1 flex items-center gap-4 justify-center text-stone-400">
                            <h1 className="text-3xl font-sans">
                                Select a class
                            </h1>
                            <HandPointing size={48} />
                        </div>
                    )
                }
                <Sidebar isNavOpen={isNavOpen} />
            </main>
            <Footer />
        </div>
    )
}