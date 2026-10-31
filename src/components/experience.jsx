import Section from "./section"

function Experience({ t }) {
    const e = t.experience
    return (
        <Section id="experience" title={e.title}>
            <ol className="timeline">
                {e.jobs.map(job => (
                    <li key={job.company} className="timeline-item card">
                        <div className="job-header">
                            <h3>{job.role} <span className="job-company">· {job.company}</span></h3>
                            <span className="job-period">{job.period}</span>
                        </div>
                        <ul className="job-bullets">
                            {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    </li>
                ))}
            </ol>
        </Section>
    )
}

export default Experience
