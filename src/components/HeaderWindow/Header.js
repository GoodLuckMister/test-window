import Logotype from './Logo'
import HeaderList from './HeaderList/List'
import './head.css'
import Mobile from './Mobile'


export default function Header() {
    return (
        <>
            <div className="header-container">
                <Logotype />
                <HeaderList />
                <a className="contact-link" href="tel:+380443317935">044-33179-35</a>
                <Mobile />
            </div>
        </>
    )
}