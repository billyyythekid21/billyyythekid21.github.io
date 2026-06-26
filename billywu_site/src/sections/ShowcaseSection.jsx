import React, {useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });
    }, []);

    return (
        <div id="projects" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/projects/burnleyaiscreenshot1.png" alt="Burnley" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Burnley
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                A Python Discord bot that provides essential Discord server moderation utilities,
                                act as an AI chatbot (provided by Google AI) and can retrieve internet memes and
                                Wikipedia entries, play music, simulate a chess match between two Discord users,
                                summarise messages,
                                act as a virtual 8 ball, and function as a simple calculator.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src="/images/projects/wavre.png"
                                    alt="Wavre"
                                />
                            </div>
                            <h2>Wavre</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/projects/comingsoon.jpg" alt="CSOC" />
                            </div>
                            <h2>CSOC</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
