import './Welcome.css'

function Welcome({ name }) {
    return(
        <div className="welcome-container">
            <h1 className="welcome-container__title">Bienvenido a {name} <i class="fa-solid fa-book"></i></h1>
            <p className="welcome-container__description">El mejor lugar para abrir tu mente</p>
        </div>
    );
}

export default Welcome;