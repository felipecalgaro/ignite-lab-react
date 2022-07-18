import Aos from "aos";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
    useEffect(() => {
        Aos.init()
    })
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1200px] gap-12 flex items-center justify-center mt-20 px-10 flex-wrap overflow-hidden">
                <div className="max-w-[640px] text-center">
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Logo />
                    </div>

                    <h1 className="mt-8 text-[2.5rem] relative leading-tight" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true">
                        Develop a <strong className="text-blue-500">complete application</strong>, from scratch, with <strong className="text-blue-500">ReactJS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true">
                        In just one week, you will dominate, with a lot of practice, one of the most used and requested technologies to access the best market opportunities.
                    </p>
                </div>

                <div className="py-8 px-12 bg-gray-700 border border-gray-500 rounded" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1100" data-aos-once="true">
                    <strong className="text-2xl mb-6 block">Subscribe for free</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Your full name"
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Your e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                            type="submit"
                        >
                            Guarantee my place
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code-mockup.png" className="my-10" alt="" />
            <Footer />
        </div>
    )
}