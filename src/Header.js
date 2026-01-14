import "./Header.css";

function Header() {
    return (
        <header>
            <div className="navBar">
                <div className="navLinks">
                    <a className="navLink" href="/">Home</a>
                    <a className="navLink" href="#about-me">About Me</a>
                    <a className="navLink" href="#projects">Projects</a>
                    <a className="navLink" href="#contact">Contact</a>
                </div>
                <p className="navMessage">Thanks for visiting!</p>
            </div>
        </header>
    )
}

export default Header;