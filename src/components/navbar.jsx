const sections = ["about", "experience", "projects", "skills", "education", "contact"]

function Navbar({ t, lang, setLang }) {
    return (
        <header className="nav">
            <div className="nav-inner">
                <a href="#top" className="nav-brand">DM</a>
                <nav className="nav-links" aria-label="Menu">
                    {sections.map(id => (
                        <a key={id} href={`#${id}`}>{t.nav[id]}</a>
                    ))}
                </nav>
                <div className="lang-switch" role="group" aria-label="Idioma / Language">
                    {["pt", "en"].map(code => (
                        <button
                            key={code}
                            type="button"
                            aria-pressed={lang === code}
                            onClick={() => setLang(code)}
                        >
                            {code.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Navbar
