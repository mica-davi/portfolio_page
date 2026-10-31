import { links } from "../data/content"
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons"

function Contact({ t }) {
    const c = t.contact
    return (
        <footer id="contact" className="contact">
            <h2 className="section-title"><span>{c.title}</span></h2>
            <p>{c.text}</p>
            <div className="contact-links">
                <a className="btn btn-primary" href={`mailto:${links.email}`}>
                    <MailIcon /> {links.email}
                </a>
                <a className="btn btn-icon" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <LinkedinIcon />
                </a>
                <a className="btn btn-icon" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon />
                </a>
            </div>
            <p className="footer-note">{t.footer} · {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Contact
