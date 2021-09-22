import face from '../../../images/header/facebook.svg'
import insta from '../../../images/header/instagram.svg'

export default function Social() {
    return (
        <>
            <img alt='social' width="27px" height="27px" src={face} />
            <img alt='social' width="27px" height="27px" src={insta} />
            <p>РУС / УКР</p>
        </>
    )
}