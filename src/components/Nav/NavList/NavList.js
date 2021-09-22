import { navigationList } from "../data/data"

export default function NavList() {
    return (
        <>
            <ul className="nav-list">
                {navigationList.map(el => (
                    <li className="nav-list__item" key={el.id}>{el.name}</li>)
                )}
            </ul></>
    )
}