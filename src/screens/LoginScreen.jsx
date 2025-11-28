import React from 'react';

const LoginScreen = () => {
    return (
        // Contenedor principal de toda la pantalla
        <div className="login-container">
            {/* Sección superior con logo y título */}
            <div className="header-section">
                <img src="/src/assets/logo.png" alt="Logo de Ordena tu Plata" className="logo" />
                <h1 className="main-title">ORDENA TU PLATA</h1>
            </div>

            {/* Contenedor del formulario (la caja blanca) */}
            <div className="form-box">
                <h2 className="welcome-title">Bienvenido</h2>
                
                {/* Inputs del formulario */}
                <form className="login-form">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="input-field" 
                    />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        className="input-field" 
                    />
                    
                    <button type="submit" className="login-button">
                        Iniciar sesión
                    </button>
                    
                    <a href="#" className="forgot-password-link">
                        ¿Olvidaste tu contraseña?
                    </a>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;