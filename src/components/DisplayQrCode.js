import './Styles/style.css'
import qrImage from './Assets/image-qr-code.png'
export const QrCodeComponent = () => {

    return (<>
        <article className="container-Qr">
            <img src={qrImage} alt="qr-Code" />
            <h2>Improve your front-end skills by building projects</h2>
            <p>Scan the Qr code to visit Fronted Mentor and take your coding skills to the next level</p>
        </article>

    </>)
}