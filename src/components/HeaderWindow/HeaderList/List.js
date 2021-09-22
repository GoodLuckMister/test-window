import MapPoint from '../../../images/header/map-nav.svg'
import Clock from '../../../images/header/phone-alt.svg'
import Phone from '../../../images/header/clock.svg'
import Arrow from '../../../images/header/chevron-down.svg'
import './list.css'

const list = [
    {
        name: 'Офисы продаж в Киеве',
        image: MapPoint
    },
    {
        name: 'С 9:00 до 19:00 без выходных',
        image: Clock
    },
    {
        name: '044-33179-35 info@ornet.com.ua',
        image: Phone
    }
]

export default function HeaderList() {
    return (
        <><ul className="header-list">
            {list.map(el => (
                <li className="header-list__item" key={el.image}>
                    <img alt="" src={el.image} width="40px" height="40px" />
                    <p className="text-list__item">{el.name}</p>
                </li>
            ))}
        </ul>
            <img alt="" width="14" height="24" src={Arrow} />
            <button className="button"><span className="symbol-button"></span>Записаться на замер</button>
        </>
    )
}