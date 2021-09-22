import HerroHead from './HerroHead'
import HerroBody from './HerroBody'

export default function Herro() {

    return (
        <>

            <HerroHead />
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div className="button button-sale">Скидки -20 %</div>
            </div>
            <HerroBody />

        </>
    )
}