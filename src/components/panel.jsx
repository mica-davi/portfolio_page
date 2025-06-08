import "../css/panel.css"

function Panel({children, degree}){
    return(
        <div className="panel" style={{'transform': `rotate(${degree}deg)`}}>
            {children}
        </div>
    )
}

export default Panel;