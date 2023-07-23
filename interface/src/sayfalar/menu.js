import axios from "axios"
import { useEffect, useState } from "react"

export default function Menu(props){
    const apiURL = "http://localhost:4848/"
    const imageUrl= "http://localhost:4849/img/"
    const rota = props.apiRotasi
    
    const [urunler, setUrunler] = useState([])

    const getData =async () => {
        const res = await axios.get( `${apiURL}`+rota)
        setUrunler(res.data)
        console.log(res.data)
      }

      useEffect(() => {
        getData()
      },[])

    return(
        <>
        <div className="header">
          <img src="restaurant_logo.png" alt="Restoran Logosu" className="logo" />
        </div>
        <br />
        <center>
          <i className="fa-sharp fa-solid fa-arrow-left fa-xl" onClick={e => window.location.href="/"} />
        </center>
        <div className="menu-container">
          <div className="category" onclick="toggleCategory('category1')">
            {props.kategori}
          </div>
          <div className="category-items active" id="category1">

        {urunler.map((e,i)=>{
            return(
                <div className="item">
                <img src={imageUrl + e.resim} alt="Ürün 1" />
                <div>
                  <div className="item-name">{e.urun}</div>
                  <div className="item-price">{e.fiyat} TL</div>
                </div>
              </div>
            )
        })}

          </div>
        </div>
      </>
      
    )
}