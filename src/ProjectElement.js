import "./ProjectElement.css"

function ProjectElement({project})
{
    return(
        <div className="projectContainer">

            <div className="projectHeader">
                <h2>{project.title}</h2>
                <h4>{project.tech}</h4>
            </div>

            <div className="projectInfo">

                <img className="projectImage" src={project.image} alt="" />


                <div className="projectDescription">
                    <h3>{project.description}</h3>

                    {
                        project.link
                        ? <a className="projectButtons" href={project.link}>Repository</a>
                        : null
                    }

                    {
                        project.demo
                        ? <a className="projectButtons" href={project.demo}>Live Demo</a>
                        : null
                    }
                    

                </div>
            </div>
            
        </div>
    )
}

export default ProjectElement