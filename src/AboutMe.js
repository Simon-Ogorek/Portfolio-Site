import "./AboutMe.css";

function AboutMe()
{
    return (
        <div className="AboutMeContainer">
            <img src="\Images\my_pic.png" alt=""></img>
            <div className="AboutMeDescription">
                <p>Hi, my name is Simon Ogorek!</p>
                <p>I'm a Computer Scientist with a minor in Game Development in my last year of college at NJIT, living in North Jersey.</p>
                <p>I enjoy picking up various technolgies to apply to the projects I do with a focus in developing games for personal projects, research and classes.</p>
                <p>I hold positions at my college as a undergraduate researcher on two projects with a  
                    research chapter being published soon and as a teachers assitant helping students with their projects for a Unity
                    game development course.</p>
                <p>Additionally, I teach children programming using various tools with the goal of improving their skills in incremental steps </p>
            </div>
        </div>
    )
}

export default AboutMe;