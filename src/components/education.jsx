import Section from "./section"

function Education({ t }) {
    const e = t.education
    return (
        <Section id="education" title={e.title}>
            <div className="education-grid">
                {e.items.map(item => (
                    <div key={item.course} className="card">
                        <h3>{item.course}</h3>
                        <p className="muted">{item.school} · {item.period}</p>
                    </div>
                ))}
                <div className="card">
                    <h3>{e.languagesTitle}</h3>
                    <ul className="plain-list">
                        {e.languages.map(l => (
                            <li key={l.name}><strong>{l.name}:</strong> <span className="muted">{l.level}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    )
}

export default Education
