import Logo from "../../../images/header/logo@1x.png"

export default function Logotype() {
    return (
        <>
            <img className="logotype" alt="logotype" width="216" height="64" src={Logo} />
            <img className="logotype-mobile" alt="logotype-mobile" width="108" height="32" src={Logo} />
        </>
    )
}