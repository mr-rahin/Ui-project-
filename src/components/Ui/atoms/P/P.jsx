import './P.css'

function P({children, style, cssStyle}){
    return <p className={style} style={cssStyle}>{children}</p>
}
export default P