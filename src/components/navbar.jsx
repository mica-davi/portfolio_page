import "../css/navbar.css"

function Navbar(){

    function scroller(id) { 
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    };   

    return (
        <div className="nav">
            <div className="normalize">        
                <button onClick={() => (scroller("about"))}>About me</button>
                <button onClick={() => {scroller("skills")}}>Skills</button>
                {/* <button>Contact</button> */}
            </div>
        </div>
    )
}

export default Navbar