import Section from "./section"
import { links } from "../data/content"
import { ExternalIcon } from "./icons"

function Interests({ t }) {
    const i = t.interests
    return (
        <Section id="interests" title={i.title}>
            <div className="card">
                {i.text.map((p, idx) => <p key={idx}>{p}</p>)}
                <a className="project-link" href={links.itch} target="_blank" rel="noreferrer">
                    <ExternalIcon /> {i.link}
                </a>
            </div>
        </Section>
    )
}

export default Interests
