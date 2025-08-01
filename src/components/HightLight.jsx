import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils/index"
import VideoCarousel from "./VideoCarousel"

const HightLight = () => {

    useGSAP(() => {
        gsap.to("#title", {
            opacity: 1,
            y: 0
        })
        gsap.to(".link", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.25
        })
    }, [])

    return (
        <div>
            <section id="hightlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
                <div className="screen-max-width">
                    <div className="mb-12 w-full md:flex items-end justify-between">

                        <h1 id="title" className="section-heading">Get the hightLights.</h1>

                        <div className="flex flex-wrap items-end gap-5">
                            <p className="link">
                                Watch the film
                                <img src={watchImg} alt="watch" className="ml-2" />
                            </p>
                            <p className="link">
                                Watch the event
                                <img src={rightImg} alt="right" className="ml-2" />
                            </p>

                        </div>
                    </div>

                    <VideoCarousel />

                </div>
            </section>
        </div>
    )
}

export default HightLight
