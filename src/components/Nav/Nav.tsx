import { createEffect, onCleanup, onMount } from "solid-js";
import { linkedInSvg, phoneSvg, proficiencySvg, puzzleSvg, questionMarkSvg } from "../../svgs";
import NavLink from "./NavLink";

export default function Nav() {
    let ref!: HTMLElement;
    let pos = 0
    onMount(() => window.addEventListener('scroll', animate))
    onCleanup(() => window.removeEventListener('scroll', animate))
    function animate() {
    
        if (window.scrollY < pos) {
            
            if (window.scrollY > 100) {
                ref.className = 'open'
            }
            else {
                ref.removeAttribute('class')
            }
        }
        else if (window.scrollY > 100) {
            ref.className = 'closed'; 
        }
        else {
            ref.removeAttribute('class')
        }
        pos = window.scrollY
    }
    return (
        <nav ref={ref!}>
            <NavLink href="#about-header" label="About" icon={questionMarkSvg} />
            <NavLink href="#projects-header" label="Projects" icon={puzzleSvg} />
            <NavLink href="#skills-header" label="Proficiencies" icon={proficiencySvg} />
            <NavLink href="#contact-header" label="Contact" icon={phoneSvg} />
        </nav>

    )
}
