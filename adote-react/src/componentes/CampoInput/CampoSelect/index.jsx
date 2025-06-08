import "../styles/CampoInput.css"

export default function CampoSelect({label, listaOptions, disabled=false, value, setValor}) {
    return(
        <div className="campoInput">
            <label>{label}:</label>
            <select disabled={disabled} value={value} onChange={(e) => setValor(e.target.value)}>
                <option value=""></option>
                {listaOptions.map((opcao, index) => (
                    <option key={index}>{opcao}</option>
                ))}
            </select>
        </div>
    )
}