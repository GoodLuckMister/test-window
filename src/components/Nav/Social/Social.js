import face from '../../../images/header/facebook.svg'
import insta from '../../../images/header/instagram.svg'

export default function Social() {
    return (
        <><div style={{ display: 'flex', width: '300px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <img style={{ marginRight: '25px', cursor: 'pointer' }} alt='social' width="27px" height="27px" src={face} />
                <img style={{ cursor: 'pointer' }} alt='social' width="27px" height="27px" src={insta} />
            </div>
            <p style={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "16px"
            }}>РУС <span style={{ color: '#ffffff80' }}> / УКР</span> </p>
        </div>
        </>
    )
}