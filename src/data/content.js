// Todo o texto do site fica aqui. Para atualizar o currículo, edite apenas este arquivo.

export const links = {
    email: "davimica04@gmail.com",
    github: "https://github.com/mica-davi",
    linkedin: "https://www.linkedin.com/in/dav%C3%AD-michaelsen-9ab893231/",
    itch: "https://aplenium.itch.io/",
}

const skills = [
    { group: { pt: "Linguagens", en: "Languages" }, items: ["JavaScript", "Python", "SQL", "C++", "C#"] },
    { group: { pt: "Frontend", en: "Frontend" }, items: ["React", "HTML", "CSS"] },
    { group: { pt: "Backend", en: "Backend" }, items: ["Node.js", "REST APIs", "SOAP APIs", { pt: "Integração de sistemas", en: "System integrations" }] },
    { group: { pt: "Bancos de dados", en: "Databases" }, items: ["BigQuery", "Oracle", "SQL Server", "MariaDB"] },
    { group: { pt: "DevOps", en: "DevOps" }, items: ["Docker", { pt: "Servidores Linux", en: "Linux servers" }, "Zabbix"] },
    { group: { pt: "Plataformas", en: "Platforms" }, items: ["TOTVS Fluig (BPM)"] },
    { group: { pt: "Ferramentas de IA", en: "AI tools" }, items: ["Claude Code"] },
]

export const content = {
    pt: {
        meta: {
            title: "Daví Michaelsen · Desenvolvedor Full Stack",
        },
        nav: {
            about: "Sobre",
            experience: "Experiência",
            projects: "Projetos",
            skills: "Competências",
            education: "Formação",
            contact: "Contato",
        },
        hero: {
            greeting: "Olá, meu nome é",
            name: "Daví Michaelsen",
            role: "Desenvolvedor Full Stack",
            stack: "Node.js · React · Docker · Python",
            location: "Esteio, RS · Disponível para remoto",
            download: "Baixar currículo",
            cvFile: "cv/davi-michaelsen-curriculo-pt.pdf",
            cvName: "Daví Michaelsen - Currículo.pdf",
        },
        about: {
            title: "Sobre mim",
            summary:
                "Desenvolvedor Full Stack com mais de 2 anos de experiência criando aplicações web com Node.js e React, integrando sistemas corporativos via APIs REST e SOAP e automatizando processos de negócio. Faço deploy de aplicações em containers Docker em servidores Linux e uso Claude Code diariamente no desenvolvimento assistido por IA.",
            journeyTitle: "Minha trajetória",
            journey: [
                "Comecei na área de TI no suporte. Enquanto atendia chamados, passei a automatizar processos internos com scripts e pequenas ferramentas, e foi isso que me levou para a equipe de desenvolvimento.",
                "Como desenvolvedor, criei integrações entre sistemas, um painel de monitoramento e uma plataforma de fluxos que substituiu uma ferramenta paga. Hoje, como Desenvolvedor Full Stack na Maxiforja, cuido de aplicações que fazem parte da operação diária da fábrica, do código ao deploy.",
            ],
            highlights: [
                { value: "2+", label: "anos como desenvolvedor" },
                { value: "~R$ 20 mil", label: "economizados em licenças de SaaS" },
                { value: "3", label: "bancos de dados integrados ao BigQuery" },
            ],
        },
        experience: {
            title: "Experiência",
            jobs: [
                {
                    role: "Desenvolvedor Full Stack",
                    company: "Maxiforja",
                    period: "set/2026 – atual",
                    bullets: [
                        "Desenvolvi um sistema de autocadastro de motoristas: o caminhoneiro escaneia um QR code, faz o cadastro pelo celular e bipa as notas fiscais com a câmera, reduzindo a espera no guichê de atendimento.",
                        "Mantenho o MES (sistema de execução da manufatura) da empresa, feito em React e Node.js.",
                        "Mantenho o site institucional da empresa (React e Node.js).",
                        "Faço deploy das aplicações com Docker em servidores Linux, com desenvolvimento assistido por IA usando Claude Code.",
                    ],
                },
                {
                    role: "Desenvolvedor Júnior",
                    company: "Pibernat",
                    period: "jun/2024 – ago/2026",
                    bullets: [
                        "Desenvolvi um sistema de gestão de fluxos no estilo Pipefy dentro do TOTVS Fluig, substituindo uma ferramenta SaaS paga e economizando cerca de R$ 20 mil em licenças.",
                        "Criei um painel de monitoramento de sistemas com Node.js e React, integrado ao Zabbix e ao sistema de chamados interno.",
                        "Integrei sistemas de fornecedores em Oracle, SQL Server e MariaDB ao data warehouse da empresa no BigQuery.",
                        "Automatizei processos de negócio via APIs REST e SOAP (Fluig, Fcomex).",
                    ],
                },
            ],
        },
        projects: {
            title: "Projetos",
            tabs: { professional: "Profissionais", personal: "Pessoais" },
            source: "Código-fonte",
            visit: "Acessar",
            professional: [
                {
                    name: "Autocadastro de motoristas",
                    where: "Maxiforja",
                    description: "Caminhoneiros escaneiam um QR code, se cadastram pelo celular e bipam as notas fiscais com a câmera, tirando a fila do guichê de atendimento.",
                    tags: ["Web mobile", "QR code", { pt: "Leitura de NF-e", en: "NF-e scanning" }],
                },
                {
                    name: "Plataforma de fluxos de trabalho",
                    where: "Pibernat",
                    description: "Sistema de gestão de fluxos no estilo Pipefy construído dentro do TOTVS Fluig. Substituiu uma ferramenta SaaS paga e economizou cerca de R$ 20 mil em licenças.",
                    tags: ["TOTVS Fluig", "BPM"],
                },
                {
                    name: "Painel de monitoramento",
                    where: "Pibernat",
                    description: "Painel que reúne a saúde dos sistemas da empresa, integrado ao Zabbix e ao sistema de chamados interno.",
                    tags: ["Node.js", "React", "Zabbix"],
                },
                {
                    name: "Integração com data warehouse",
                    where: "Pibernat",
                    description: "Integração de sistemas de fornecedores em diferentes bancos de dados ao data warehouse da empresa para análise centralizada.",
                    tags: ["BigQuery", "Oracle", "SQL Server", "MariaDB"],
                },
            ],
            personal: [
                {
                    name: "Game of Life",
                    description: "Implementação do Jogo da Vida de Conway em C++, com renderização em tempo real usando raylib.",
                    tags: ["C++", "raylib"],
                    source: "https://github.com/mica-davi/Cpp-GameOfLife",
                },
                {
                    name: "Este portfólio",
                    description: "Site bilíngue feito em React, inspirado na identidade visual de Persona 5 e hospedado no GitHub Pages com domínio próprio.",
                    tags: ["React", "Vite", "GitHub Pages"],
                    source: "https://github.com/mica-davi/portfolio_page",
                },
            ],
        },
        skills: {
            title: "Competências",
            groups: skills,
        },
        education: {
            title: "Formação",
            items: [
                { course: "Bacharelado em Ciência da Computação", school: "UniLaSalle", period: "jun/2023 – previsão de conclusão em 2028" },
                { course: "Técnico em Desenvolvimento de Sistemas", school: "SENAI", period: "jun/2021 – dez/2022" },
            ],
            languagesTitle: "Idiomas",
            languages: [
                { name: "Português", level: "Nativo" },
                { name: "Inglês", level: "Intermediário avançado (B2)" },
            ],
        },
        interests: {
            title: "Interesses",
            text: [
                "Fora do trabalho, sou apaixonado por desenvolvimento de jogos e programação de baixo nível. Desenvolvo jogos 2D e 3D na Unity, de combates por turnos a puzzles baseados em física, e estudo game design por meio de palestras e livros.",
            ],
            link: "Veja meus jogos no itch.io",
        },
        contact: {
            title: "Vamos conversar?",
            text: "Estou aberto a novas oportunidades, inclusive remotas. Me mande um e-mail ou me chame no LinkedIn.",
        },
        footer: "Feito com React por Daví Michaelsen",
    },

    en: {
        meta: {
            title: "Daví Michaelsen · Full Stack Developer",
        },
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            education: "Education",
            contact: "Contact",
        },
        hero: {
            greeting: "Hi, my name is",
            name: "Daví Michaelsen",
            role: "Full Stack Developer",
            stack: "Node.js · React · Docker · Python",
            location: "Esteio, Brazil (UTC-3) · Open to remote",
            download: "Download resume",
            cvFile: "cv/davi-michaelsen-resume-en.pdf",
            cvName: "Davi Michaelsen - Resume.pdf",
        },
        about: {
            title: "About me",
            summary:
                "Full Stack Developer with 2+ years of experience building web applications with Node.js and React, integrating enterprise systems through REST and SOAP APIs, and automating business processes. I deploy containerized apps with Docker on Linux and use Claude Code daily in AI-assisted development. Looking for remote roles with international teams.",
            journeyTitle: "My journey",
            journey: [
                "I started out in IT support. While handling tickets, I began automating internal processes with scripts and small tools, and that is what moved me to the development team.",
                "As a developer, I built system integrations, a monitoring dashboard and a workflow platform that replaced a paid tool. Today, as a Full Stack Developer at Maxiforja, I own applications that are part of the factory's daily operation, from code to deployment.",
            ],
            highlights: [
                { value: "2+", label: "years as a developer" },
                { value: "~BRL 20k", label: "saved in SaaS licensing" },
                { value: "3", label: "databases integrated into BigQuery" },
            ],
        },
        experience: {
            title: "Experience",
            jobs: [
                {
                    role: "Full Stack Developer",
                    company: "Maxiforja",
                    period: "Sep 2026 – Present",
                    bullets: [
                        "Built a driver self-registration system: truck drivers scan a QR code, register on their phone and scan invoices (NF-e) with the camera, which cut wait times at the service counter.",
                        "Maintain the company's MES (Manufacturing Execution System), built with React and Node.js.",
                        "Maintain the company website (React and Node.js).",
                        "Deploy applications with Docker on Linux servers, using Claude Code for AI-assisted development.",
                    ],
                },
                {
                    role: "Junior Developer",
                    company: "Pibernat",
                    period: "Jun 2024 – Aug 2026",
                    bullets: [
                        "Built a Pipefy-style workflow management system inside TOTVS Fluig, replacing a paid SaaS tool and saving about BRL 20,000 in licensing.",
                        "Built a system monitoring dashboard with Node.js and React, integrated with Zabbix and the internal ticketing system.",
                        "Integrated supplier systems running on Oracle, SQL Server and MariaDB into the company's BigQuery data warehouse.",
                        "Automated business processes through REST and SOAP APIs (Fluig, Fcomex).",
                    ],
                },
            ],
        },
        projects: {
            title: "Projects",
            tabs: { professional: "Professional", personal: "Personal" },
            source: "Source code",
            visit: "Visit",
            professional: [
                {
                    name: "Driver self-registration",
                    where: "Maxiforja",
                    description: "Truck drivers scan a QR code, register on their phone and scan invoices with the camera, taking the queue away from the service counter.",
                    tags: ["Mobile web", "QR code", { pt: "Leitura de NF-e", en: "NF-e scanning" }],
                },
                {
                    name: "Workflow platform",
                    where: "Pibernat",
                    description: "Pipefy-style workflow management system built inside TOTVS Fluig. Replaced a paid SaaS tool and saved about BRL 20,000 in licensing.",
                    tags: ["TOTVS Fluig", "BPM"],
                },
                {
                    name: "Monitoring dashboard",
                    where: "Pibernat",
                    description: "Dashboard that brings together the health of the company's systems, integrated with Zabbix and the internal ticketing system.",
                    tags: ["Node.js", "React", "Zabbix"],
                },
                {
                    name: "Data warehouse integration",
                    where: "Pibernat",
                    description: "Integrated supplier systems running on different databases into the company's data warehouse for centralized analysis.",
                    tags: ["BigQuery", "Oracle", "SQL Server", "MariaDB"],
                },
            ],
            personal: [
                {
                    name: "Game of Life",
                    description: "Conway's Game of Life implemented in C++ with real-time rendering using raylib.",
                    tags: ["C++", "raylib"],
                    source: "https://github.com/mica-davi/Cpp-GameOfLife",
                },
                {
                    name: "This portfolio",
                    description: "Bilingual site built with React, inspired by Persona 5's visual identity and hosted on GitHub Pages under my own domain.",
                    tags: ["React", "Vite", "GitHub Pages"],
                    source: "https://github.com/mica-davi/portfolio_page",
                },
            ],
        },
        skills: {
            title: "Skills",
            groups: skills,
        },
        education: {
            title: "Education",
            items: [
                { course: "B.Sc. in Computer Science", school: "UniLaSalle", period: "Jun 2023 – Expected 2028" },
                { course: "Software Development Technician", school: "SENAI", period: "Jun 2021 – Dec 2022" },
            ],
            languagesTitle: "Languages",
            languages: [
                { name: "Portuguese", level: "Native" },
                { name: "English", level: "Upper-intermediate (B2)" },
            ],
        },
        interests: {
            title: "Interests",
            text: [
                "Outside work, I'm passionate about game development and low-level programming. I build 2D and 3D games in Unity, from turn-based combat to physics-based puzzles, and study game design through lectures and books.",
            ],
            link: "See my games on itch.io",
        },
        contact: {
            title: "Let's talk",
            text: "I'm open to new opportunities, including remote roles. Send me an email or reach out on LinkedIn.",
        },
        footer: "Built with React by Daví Michaelsen",
    },
}
