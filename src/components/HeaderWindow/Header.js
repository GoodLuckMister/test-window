import Logotype from './Logo'
import HeaderList from './HeaderList/List'
import './head.css'


export default function Header() {
    return (
        <>
            <div className="header-container">
                <Logotype />
                <HeaderList />
            </div>
        </>
    )
}