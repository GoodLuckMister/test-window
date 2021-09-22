import NavList from "./NavList"
import Social from "./Social"
import './nav.css'

export default function Navigation() {
    return (
        <><nav className="navigation">
            <NavList />
            <Social />
        </nav>
        </>
    )
}