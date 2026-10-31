import Section from "./section"
import { tr } from "../data/tr"

function Skills({ t, lang }) {
    const s = t.skills
    return (
        <Section id="skills" title={s.title}>
            <div className="skills-grid">
                {s.groups.map(g => (
                    <div key={g.group.en} className="card skill-group">
                        <h3>{tr(g.group, lang)}</h3>
                        <ul className="tags">
                            {g.items.map(item => <li key={tr(item, lang)}>{tr(item, lang)}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Skills
