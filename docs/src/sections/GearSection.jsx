import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader.jsx'

gsap.registerPlugin(ScrollTrigger)

const gear = [
    {
        title: 'Computer Science',
        desc: '14-inch MacBook Pro with the M3 Pro chip is my go-to, along with a crisp 4K monitor. I am indecisive ' +
            'between using VS Code and JetBrains IDEs (WebStorm, PyCharm, IntelliJ etc), which honestly makes me ' +
            'extremely flexible with any software. Even if I have no idea, I will always put in the time to adapt.',
    },
    {
        title: 'Music',
        desc: 'Yamaha DTX450K electric drum kit, Fender Player II P-Bass, Yamaha bass, ' +
            'and a Squier Stratocaster electric guitar which I sometimes use. ' +
            'Paired with a Fender Rumble 40 bass amp and a Boss DS-1 Distortion Pedal when needed.',
    },
    {
        title: 'Photography',
        desc: 'iPhone 13 Pro, with aspirations for a Sony A7 IV or Canon EOS R6 Mark II. ' +
            'Photos edited using Adobe Lightroom.',
    },
    {
        title: 'Video Editing',
        desc: 'Adobe After Effects, Premiere Pro, and Media Encoder. ' +
            'May use a dedicated camera for recording in the future.',
    },
]

const GearSection = () => {
    const cardRefs = useRef([])

    useGSAP(() => {
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
        <section id="gear" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="My Gear" sub="What I use" />

                <div className="mt-16 grid-3-cols">
                    {gear.map(({ title, desc }, index) => (
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

export default GearSection
