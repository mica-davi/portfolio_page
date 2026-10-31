import { links } from "../data/content"
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons"

function Hero({ t }) {
    const h = t.hero
    return (
        <section id="top" className="hero">
            <p className="hero-greeting">{h.greeting}</p>
            <h1 className="hero-name">{h.name}</h1>
            <p className="hero-role"><span>{h.role}</span></p>
            <p className="hero-stack">{h.stack}</p>
            <p className="hero-location">{h.location}</p>

            <div className="hero-actions">
                <a className="btn btn-primary" href={import.meta.env.BASE_URL + h.cvFile} download={h.cvName}>
                    <DownloadIcon /> {h.download}
                </a>
                <a className="btn btn-icon" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <LinkedinIcon />
                </a>
                <a className="btn btn-icon" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon />
                </a>
                <a className="btn btn-icon" href={`mailto:${links.email}`} aria-label="E-mail">
                    <MailIcon />
                </a>
            </div>
        </section>
    )
}

export default Hero
