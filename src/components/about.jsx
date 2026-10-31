import Section from "./section"

function About({ t }) {
    const a = t.about
    return (
        <Section id="about" title={a.title}>
            <div className="about-grid">
                <div className="card">
                    <p className="lead">{a.summary}</p>
                    <h3 className="card-subtitle">{a.journeyTitle}</h3>
                    {a.journey.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <ul className="highlights">
                    {a.highlights.map(h => (
                        <li key={h.label} className="highlight">
                            <span className="highlight-value">{h.value}</span>
                            <span className="highlight-label">{h.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default About
