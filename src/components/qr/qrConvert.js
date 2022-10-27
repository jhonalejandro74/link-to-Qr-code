import QRCode from "qrcode"
let svgFile = ''

export function urlToQrCode(url) {
    QRCode.toDataURL(url, (err, urlResponse) => { svgFile = urlResponse })
    return svgFile
}





