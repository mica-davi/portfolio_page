import Panel from "./Panel"
import PanelInside from "./panelinside"
import "../css/profile.css"

function Profile(){
    return (
        <>
            <div className="profil-outer">
                <Panel degree="1">
                    <div className="profile-inner">
                        <h3 className="profile-title">Summary</h3>
                        <PanelInside degree="-1">
                            <p>
                                Hi, my name is Daví Michaelsen. I am a full-stack developer with 2 years of professional experience and over 5 years of overall experience as a developer.
                                <br/>
                                <br/>
                                I am currently working as a web developer, but I’m especially passionate about game development and low-level programming.
                            </p>
                        </PanelInside>
                    </div>
                </Panel>
            </div>
            <br/>
            <div id="about" className="profil-outer">
                <Panel degree="0">
                    <div className="profile-inner">
                        <h3 className="profile-title">My Journey</h3>
                        <PanelInside degree="-1">
                            <p style={{transform: "rotate(.5deg)"}}>
                                I started my career as an IT support, but due to my proactive behaviour automating
                                internal IT processes, and my programming skills I was quickly moved to the development
                                department.
                                <br/>
                                <br/>
                                Nowadays I'm still working as a full stack developer in the same company, and I'm now
                                considered key member in the development team.
                            </p>
                        </PanelInside>
                    </div>
                </Panel>
            </div>
        </>
    )
}

export default Profile