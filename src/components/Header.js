import logo from "../images/logo.svg"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="логотип Mesto Russia" className="header__logo"/>
        </header>
    )
}