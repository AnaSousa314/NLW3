import React from 'react'
import { Link } from 'react-router-dom'
import mapMarkerImg from '../images/map-marker.svg'
import {FiPlus} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css' 
function OrphanageMap(){
  
  return(
    <>
      <div id="page-map">
        <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy" />
            <h2>Escolha um orfanato no mapa</h2>
            <p>
              Muitas crianças estão esperando a sua visita 🙂
            </p>
          </header>
          <footer>
            <strong>Parauapebas</strong>
            <span>Pará</span>
          </footer>
        </aside>
        <MapContainer 
          center={[-6.0444359,-49.8854597]}
          zoom={15}
          style={{width:'100%', height:'100%'}}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </MapContainer>
        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#FFF"/>
        </Link>
      </div>
    </>
  );
}

export default OrphanageMap;