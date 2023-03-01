import './Select.css'

function Select({text, name, options, placeholder, handleOnChange, value}) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}</label>
            <select

                name={name}
                id={name}
                value={value || ''}
                onChange={handleOnChange}
            >
                <option>
                    Seleciona uma opção
                </option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select