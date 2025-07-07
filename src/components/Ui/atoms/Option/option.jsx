import './option.css'

function Option({ value, children, className, onClick }) {
    return (
        <li className={className} data-value={value} onClick={onClick}>
            {children}
        </li>
    )
}

export default Option
