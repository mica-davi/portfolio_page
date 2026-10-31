import { useEffect, useState } from 'react'
import "./css/styles.css"
import { content } from './data/content'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Skills from './components/skills'
import Education from './components/education'
import Interests from './components/interests'
import Contact from './components/contact'

function initialLang() {
    try {
        const saved = localStorage.getItem("lang")
        if (saved === "pt" || saved === "en") return saved
    } catch { /* storage bloqueado: segue para o idioma do navegador */ }
    return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en"
}

function App() {
    const [lang, setLang] = useState(initialLang)
    const t = content[lang]

    useEffect(() => {
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"
        document.title = t.meta.title
        try { localStorage.setItem("lang", lang) } catch { /* ignora */ }
    }, [lang, t])

    return (
        <>
            <Navbar t={t} lang={lang} setLang={setLang} />
            <main>
                <Hero t={t} />
                <About t={t} />
                <Experience t={t} />
                <Projects t={t} lang={lang} />
                <Skills t={t} lang={lang} />
                <Education t={t} />
                <Interests t={t} />
            </main>
            <Contact t={t} />
        </>
    )
}

export default App
