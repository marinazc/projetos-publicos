import "../styles/CampoInput.css"

export default function CampoText({label, disabled=false, value, setValor}) {
    return(
        <div className="campoInput">
            <label>{label}:</label>
            <input type="text" placeholder="" disabled={disabled} value={value} onChange={(e) => setValor(e.target.value)}/>
        </div>
    )
}