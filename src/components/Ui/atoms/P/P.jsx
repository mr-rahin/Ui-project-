import './P.css'

function P({children, style, cssStyle, onClick}){
    return <p className={style} style={cssStyle} onClick={onClick}>{children}</p>
}
export default P