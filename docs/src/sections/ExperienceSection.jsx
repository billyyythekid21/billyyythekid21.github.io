import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {expCards} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray(".timeline-card").forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left center",
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%"
                }
            })
        })

        gsap.utils.toArray(".expText").forEach((text) => {
            gsap.from(text, {
                xPercent: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%"
                }
            })
        })
    }, []);

    return (
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding pb-32 md:pb-52">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Experience" sub="My Overview" />
            </div>

            <div className="mt-32 relative md:px-20 px-5">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {expCards.map((card, index) => (
                        <div key={card.title} className="exp-card-wrapper">
                            <div className="xl:w-2/6">
                                <GlowCard card={card} index={index}>
                                    <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div>
                                </GlowCard>
                            </div>

                            <div className="xl:w-4/6">
                                <div className="flex items-start relative">
                                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-40">
                                        <div className="timeline-logo">
                                            <img src={card.logoPath} alt="logo" />
                                        </div>
                                        <div>
                                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                                            <p className="my-5 text-white-50">{card.date}</p>
                                            <p className="text-[#839cb5] italic">Responsibilities</p>
                                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                {card.responsibilities.map((responsibility) => (
                                                    <li key={responsibility} className="text-lg">
                                                        {responsibility}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ExperienceSection
