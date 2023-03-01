import './SubmitButton.css'

function SubmitButton({ text }) {
    return (
        <div className="form_control">
            <button className="btn">{text}</button>
        </div>
    )
}

export default SubmitButton