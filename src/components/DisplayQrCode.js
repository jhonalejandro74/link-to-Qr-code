import './Styles/style.css'
import { urlToQrCode } from './qr/qrConvert.js'


export const DisplayQrCode = (props) => {
    const {link} =  props
    const qrCodeImg = urlToQrCode(link)
    return (<>
        <article className="container-Qr">
            <img src={qrCodeImg} alt="qr-code" />
            <h2>Improve your front-end skills by building projects</h2>
            <p>Scan the Qr code to visit Fronted Mentor and take your coding skills to the next level</p>
        </article>

    </>)
}