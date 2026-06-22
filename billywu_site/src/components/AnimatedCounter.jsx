import React, { useRef } from 'react'
import { counterItems } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        counterItems.forEach((item, index) => {
            const el = containerRef.current?.querySelector(`#c-${index}`)
            if (!el) return
            const counter = { val: 0 }
            gsap.to(counter, {
                val: item.value,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    once: true,
                },
                onUpdate() {
                    el.textContent = Math.ceil(counter.val) + item.suffix
                },
                onComplete() {
                    el.textContent = item.value + item.suffix
                },
            })
        })
    }, { scope: containerRef })

    return (
        <div id="counter" ref={containerRef} className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            <span id={`c-${index}`}>{item.value}{item.suffix}</span>
                        </div>
                        <div className="text-white-50 text-lg">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AnimatedCounter
