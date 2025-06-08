import "../css/Stack.css"
import { useState, useEffect } from "react"        

function Stack(){
    const [getTab, setTab] = useState(null)

    function StackSelectAnim(){
        const pillar1 = document.getElementById("stack-pillar-1")
        const pillar2 = document.getElementById("stack-pillar-2")
        const pillar3 = document.getElementById("stack-pillar-3")

        pillar1.classList.remove("stack-pillar-1")
        pillar2.classList.remove("stack-pillar-2")
        pillar3.classList.remove("stack-pillar-3")

        pillar1.offsetHeight;
        pillar2.offsetHeight;
        pillar3.offsetHeight;

        pillar1.classList.add("stack-pillar-1")
        pillar2.classList.add("stack-pillar-2")
        pillar3.classList.add("stack-pillar-3")

        setTimeout(() =>{

        const skillsDiv = document.getElementById("skillscontent")
        skillsDiv.classList.value = "skill hidden"
        const gamedevDiv = document.getElementById("gamedevcontent")
        gamedevDiv.classList.value = "skill hidden"
        const extraDiv = document.getElementById("extracontent")
        extraDiv.classList.value = "skill hidden"
        
        switch(getTab.id){
            case "skillsbtn":
                skillsDiv.classList.value = "skill"
                break;
            case "gamedevbtn":
                gamedevDiv.classList.value = "skill"
                break;
            case "extrabtn":
                extraDiv.classList.value ="skill"
                break;
        }}, 500)
    }

    useEffect(() => {
        if(getTab == null) return;

        const tabs = document.getElementById("tabs")
        StackSelectAnim()
        for (const tab of tabs.children){
            if(tab == getTab){
                tab.setAttribute("data-tab-selected", "true")
            }else{
                tab.setAttribute("data-tab-selected", "false")
            }
        }
    }, [getTab])

    return (
        <div className="background-panel" id="skills">
            <div className="normalize-panel">
                <div className="stacks-panel">
                    <div className="tabs" id="tabs">
                        <button className="tab-btn" data-tab-selected="true" id="skillsbtn" onClick={(e) => {setTab(e.currentTarget)}}>Skills</button>
                        <button className="tab-btn" data-tab-selected="false" id="gamedevbtn" onClick={(e) => {setTab(e.currentTarget)}}>GameDev</button>
                        <button className="tab-btn" data-tab-selected="false" id="extrabtn" onClick={(e) => {setTab(e.currentTarget)}}>Extra</button>
                    </div>

                    <div className="tab-content">
                        <div className="stack-transition" id="stack-transitions">
                            <div id="skillscontent" className="skill">
                                <h3>Fullstack</h3>
                                <p>I have a vast knowledge in building full-stack applications using React, Node and Express. From creating Back-end APIs to the front-end interfaces, I can build complete solutions that address real world problems.</p>

                                <br/>
                                <h3>C#</h3>
                                <p>With a deep understanding of the C# programming language, I can create complex and scalable applications by applying the four pillars of object-oriented programming: abstraction, encapsulation, inheritance, and polymorphism.</p>

                                <br/>
                                <h3>Databases</h3>
                                <p>Over 2 years of experience managing SQL, MariaDB, and Oracle databases. I specialize in integrating databases from various systems into data warehouses and transforming this data for subsequent analysis.</p>
                            </div>

                            <div id="gamedevcontent" className="skill hidden">
                                <h3>Unity</h3>
                                <p>I have over 4 years of experience developing games using the Unity Game Engine. Over the years, I've built both 2D and 3D games — from simple turn-based combat mechanics to complex physics-based puzzle games.</p>
                                <p>Since the beginning of my game development journey, I’ve not only improved my programming skills, but also continuously studied game design — watching lectures, reading books, and applying this knowledge to my projects.</p>
                                <br/>

                                <p>You can follow my indie game developer jorney in this <a href="https://aplenium.itch.io/" target="_blank">link</a></p>
                            </div>

                            <div id="extracontent" className="skill hidden">
                                <h3>This website</h3>
                                <p>This website was inspired by the color palette and rebellious, stylish UI design of Persona 5.</p>
                                <p>The main motivation behind this project was to overcome a creative block and finally update my old, outdated portfolio site. I still plan to add more sections, like “Education” and “Contact Me”.</p>
                                <p>You can also check out the source code on my <a href="https://github.com/mica-davi" target="_blank">GitHub profile!</a></p>
                            </div>
                            <div id="stack-pillar-1"></div>
                            <div id="stack-pillar-2"></div>
                            <div id="stack-pillar-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack