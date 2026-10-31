import { useEffect, useRef, useState } from "react"
import Section from "./section"
import { GithubIcon } from "./icons"
import { tr } from "../data/tr"

const tabs = ["professional", "personal"]
// Tempo até os pilares cobrirem o painel e o conteúdo poder ser trocado
const SWAP_DELAY = 350

function Projects({ t, lang }) {
    const p = t.projects
    const [selected, setSelected] = useState("professional")
    const [shown, setShown] = useState("professional")
    const [animKey, setAnimKey] = useState(0)
    const timer = useRef(null)

    useEffect(() => () => clearTimeout(timer.current), [])

    function select(tab) {
        if (tab === selected) return
        setSelected(tab)
        clearTimeout(timer.current)
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setShown(tab)
            return
        }
        setAnimKey(k => k + 1)
        timer.current = setTimeout(() => setShown(tab), SWAP_DELAY)
    }

    return (
        <Section id="projects" title={p.title}>
            <div className="tabs" role="tablist">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        type="button"
                        role="tab"
                        id={`tab-${tab}`}
                        aria-selected={selected === tab}
                        aria-controls="projects-panel"
                        className="tab-btn"
                        onClick={() => select(tab)}
                    >
                        {p.tabs[tab]}
                    </button>
                ))}
            </div>

            <div className="tab-panel" id="projects-panel" role="tabpanel" aria-labelledby={`tab-${selected}`}>
                {animKey > 0 && (
                    <div className="pillars" key={animKey} aria-hidden="true">
                        <span /><span /><span />
                    </div>
                )}
                <div className="project-grid">
                    {p[shown].map(project => (
                        <article key={project.name} className="project-card">
                            <header>
                                <h3>{project.name}</h3>
                                {project.where && <span className="project-where">{project.where}</span>}
                            </header>
                            <p>{project.description}</p>
                            <ul className="tags">
                                {project.tags.map(tag => <li key={tr(tag, lang)}>{tr(tag, lang)}</li>)}
                            </ul>
                            {project.source && (
                                <a className="project-link" href={project.source} target="_blank" rel="noreferrer">
                                    <GithubIcon /> {p.source}
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Projects
