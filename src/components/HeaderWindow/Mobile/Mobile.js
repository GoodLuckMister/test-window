import { useState } from 'react'
import Hamburger from 'hamburger-react'

export default function Mobile() {
    const [isOpen, setOpen] = useState(false)
    return (<>
        <div className="hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    </>)
}