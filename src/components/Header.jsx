
function Header() {
    return (
        <header>
            <div className="logo">LOGO</div>
            <nav>
                <ul>
                    <li><a href="#qualifications">Qualifications</a></li>
                    <li><a href="#organizations">Organizations</a></li>
                    <li><a href="#research">Research & Analysis</a></li>
                    <li><a href="#lorem1">Lorem ipsum</a></li>
                    <li><a href="#lorem2">Lorem ipsum</a></li>
                </ul>
            </nav>
            <div className="last-nav">
                <button className="search">
                    <img src="/search.svg" alt="" />
                </button>
                <button className="enrolment">Enrolment</button>
            </div>
        </header>
    );
}

export default Header;