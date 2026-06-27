import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader.jsx'

gsap.registerPlugin(ScrollTrigger)

const interests = [
    {
        title: 'Programming',
        desc: 'Even before commencing my university studies in computer science, ' +
            'I\'ve always had a deep interest in programming — specifically in web and software development,' +
            'and AI/Machine Learning.',
    },
    {
        title: 'Music',
        desc: 'I\'ve played the drum kit for 8+ years and the bass for 1+ years, ' +
            'participated in multiple school bands and jazz ensembles, community events, ' +
            'and at VSMF at Federation Square in 2018.',
    },
    {
        title: 'Photography',
        desc: 'I have captured a variety of shots across Melbourne, Sydney, China, Indonesia, New Zealand and Japan,' +
            'with Canada and the U.S. in the works. ' +
            'As leader of my previous high school\'s AV Club, I was employed in photography for numerous school ' +
            'events and had photographs exhibited in school newsletters.',
    },
]

const AboutSection = () => {
    const sectionRef = useRef(null)
    const cardRefs = useRef([])

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom-=100',
                },
            }
        )

        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * index,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=80',
                    },
                }
            )
        })
    }, [])

    return (
        <section id="about" ref={sectionRef} className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="About Me" sub="Who I am" />

                <div className="mt-12 max-w-3xl mx-auto text-center flex flex-col gap-5">
                    <p className="text-white-50 md:text-xl text-lg">
                        I aspire to dive deep into software development, computer science, and photography.
                    </p>
                    <p className="text-white-50 md:text-xl text-lg">
                        Working on programming and photography projects is my game plan, assisted by my studies in
                        Bachelor of Computer Science Advanced (Honours) at Monash University.
                    </p>
                    <p className="text-white-50 md:text-xl text-lg">
                        Everything will be (and always have been) in safe hands, no matter what.
                    </p>
                </div>

                <div className="mt-16 grid-3-cols">
                    {interests.map(({ title, desc }, index) => (
                        <div
                            key={title}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="card-border rounded-xl p-8 flex flex-col gap-4"
                        >
                            <h3 className="text-white text-2xl font-semibold">{title}</h3>
                            <p className="text-white-50 text-lg">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutSection
