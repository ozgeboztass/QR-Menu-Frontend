import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kategoriler from './sayfalar/kategoriler';
import Menu from "./sayfalar/menu";


function App() {
  return ( 
    <Routes>
        <Route path="/" element={<Kategoriler/>} /> 
        <Route path="/sicak-icecekler" element={<Menu apiRotasi="sicak" kategori="Sıcak İçecekler"/>} /> 
        <Route path="/tatlilar" element={<Menu apiRotasi="tatli" kategori="Tatlılar"/>} /> 
        <Route path="/eglence" element={<Menu apiRotasi="eglence" kategori="Eğlence"/>} /> 
        <Route path="/soguk-icecekler" element={<Menu apiRotasi="soguk" kategori="Soğuk İçecekler"/>} /> 
        <Route path="/yiyecekler" element={<Menu apiRotasi="yiyecek" kategori="Yiyecekler"/>} /> 
        <Route path="/cerezler" element={< Menu apiRotasi="cerez" kategori="Çerezler"/>} /> 
        <Route path="/dondurmalar" element={< Menu apiRotasi="dondurma" kategori="Dondurmalar"/>} /> 
        <Route path="/rezervasyon" element={< Menu apiRotasi="rezervasyon" kategori="Rezervasyon"/>} /> 
    </Routes>
    
    );
}

export default App;
