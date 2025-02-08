import { useState } from "react";
//import './NavBar.css'

const NavBar = ({ onBuscar }) => {

    const [nomeBusca, setNomeBusca] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nomeBusca.trim() !== "") {
        onBuscar(nomeBusca); // Chama a função de busca vinda do App.jsx
        }
    };

    return (
        <header>
            <div className="logo">Eventos<span>Online</span></div>
            <div className="search-bar">
                <form onSubmit={handleSubmit} className="form-buscar-name" >
                    <input
                        type="text"
                        placeholder="Buscar evento por nome..."
                        value={nomeBusca}
                        onChange={(e) => setNomeBusca(e.target.value)}
                        className="p-2 rounded text-black"
                    />
                    <button type="submit" className="bg-white text-blue-500 px-4 py-2 rounded">
                    Buscar
                    </button>
                </form>
                
            </div>

            <div className="icons">
                <span><img src="/img/casa.png" alt="" /></span>
                <span><img src="/img/heart1.png" alt="" /></span>
                <span><img src="/img/notification.png" alt="" /></span>
                <span><img src="/img/usuario.png" alt="" /></span>
            </div>
        </header>
    );
  };
  
  export default NavBar;

  