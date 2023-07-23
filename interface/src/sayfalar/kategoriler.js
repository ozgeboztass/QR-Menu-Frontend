import { Outlet, Link } from "react-router-dom";

export default function Kategoriler(){

    function redirectToURL(url) {
        window.location.href = url;
      } 

    return(
        <>
        <div className="header">
          <img src="restaurant_logo.png" alt="Restoran Logosu" className="logo" />
        </div>
        <div className="menu-container">
          <div className="category" onClick={e=>redirectToURL("/sicak-icecekler")}>Sıcak İçecekler</div>
          <div className="category" onClick={e=>redirectToURL("/soguk-icecekler")}>Soğuk İçecekler</div>
          <div className="category" onClick={e=>redirectToURL("/yiyecekler")}>Yiyecekler</div>
          <div className="category" onClick={e=>redirectToURL("/tatlilar")}>Tatlılar</div>
          
          <div className="category" onClick={e=>redirectToURL("/dondurmalar")}>Dondurmalar</div>
          <div className="category" onClick={e=>redirectToURL("/cerezler")}>Çerezler</div>
          <div className="category" onClick={e=>redirectToURL("/eglence")}>Eğlence Oyunları</div>
          <div className="category" onClick={e=>redirectToURL("/rezervasyon")}>Rezervasyon</div>
        </div>
        </>
      
    )
}