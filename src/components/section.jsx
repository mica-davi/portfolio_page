// Seção com o título no estilo "faixa inclinada" do Persona 5
function Section({ id, title, children }) {
    return (
        <section id={id} className="section">
            <h2 className="section-title"><span>{title}</span></h2>
            {children}
        </section>
    )
}

export default Section
