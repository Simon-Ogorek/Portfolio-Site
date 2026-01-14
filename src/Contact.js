import "./Contact.css";

function Contact( {id} )
{
    return (
        <div className="ContactPage" id={id}>
            <div className="ContactContent">

                <div className="ContactElement">
                    <a href='m&#97;&#105;lto&#58;&#115;&#111;293&#64;n%6Ait&#46;ed&#117;'>s&#111;29&#51;&#64;n&#106;it&#46;edu</a>
                    <a href="\Simon_Ogorek_Resume.pdf">Resume</a>
                </div>

                <div className="ContactLogos">
                    <a href="https://www.linkedin.com/in/simon-ogorek/">
                        <img  src="Images\logos\linkedin.png" alt=""></img>
                    </a>
                    <a href="https://github.com/Simon-Ogorek">
                        <img  src="Images\logos\github.svg" alt=""></img>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact;