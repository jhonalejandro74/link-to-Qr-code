export const SetQrCode = () => {
    const generateCode = (e) => {
        e.preventDefault()

    }
    return (
        <div className="set-Qr-container">
            <form action={generateCode}>
                <input type='text' />
                <button>Generate Qr Code!!</button>
            </form>

        </div>
    )
}
