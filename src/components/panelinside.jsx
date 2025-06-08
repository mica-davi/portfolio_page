import "../css/panelinside.css"

function PanelInside({children, degree}){
    return (
        <div className="panel-inside" style={{'transform': `rotate(${degree}deg)`}}>
            {children}
        </div>
    )
}

export default PanelInside