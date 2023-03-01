import './Loading.css'

import loading from '../../img/loading.svg'

function Loading() {
    return (
        <div className="loader_container">
            <img className="loader" src={loading} alt="Carregando..." />
        </div>
    )
}

export default Loading