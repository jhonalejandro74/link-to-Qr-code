import { useState } from "react"

export const SetQrCode = (props) => {

    const [inputValue, setInputValue] = useState('')
    const { getQrLink } = props

    // ======>     events handlers

    const onSubmitEvent = (e) => {
        e.preventDefault()
        getQrLink(inputValue)
        setInputValue('')
    }
    const handleOnchangeEvent = (e) => {
        e.preventDefault()
        const { value } = e.target
        setInputValue(value)
    }


    return (
        <div className="set-Qr-container">
            <form onSubmit={onSubmitEvent}>
                <label>
                    <h2>Url To Qr-Code</h2>
                    <input type='text' onChange={handleOnchangeEvent} value={inputValue} />
                </label>
                <button>convert to Qr Code!!</button>
            </form>

        </div>
    )
}
