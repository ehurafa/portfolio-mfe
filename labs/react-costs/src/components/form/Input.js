import './Input.css'

function Input({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}</label>
            <input
                type={text}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default Input