import './her.css'

const array = [
    {
        name: 'Окна',
        id: 1,
    },
    {
        name: 'Двери',
        id: 2,
    },
    {
        name: 'Балконы',
        id: 3,
    },
    {
        name: 'Перегородки',
        id: 4,
    },
    {
        name: 'Ворота и Ролеты',
        id: 5,
    },
    {
        name: 'Комплектующие',
        id: 6,
    },
    {
        name: 'Цены',
        id: 7,
    },
    {
        name: 'Услуги',
        id: 8,
    },
    {
        name: 'Наши работы',
        id: 9
    }
]

export default function Head() {
    return (
        <><ul className="herro-list">
            {array.map(e => (
                <li className="herro-list__item" key={e.id}>{e.name}</li>
            ))}
        </ul>
        </>
    )
}