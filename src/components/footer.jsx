import "../css/footer.css"

function Footer(){
    return (
        <div className="footer">
            <img className="icon" src="icons8-github-128.png" alt="github" onClick={() => {window.open("https://github.com/mica-davi", "_blank")}}></img>
            <img className="icon" src="icons8-linkedin-128.png" alt="linkedin" onClick={() => {window.open("https://www.linkedin.com/in/dav%C3%AD-michaelsen-9ab893231/", "_blank")}}></img>
        </div>
    )
}

export default Footer