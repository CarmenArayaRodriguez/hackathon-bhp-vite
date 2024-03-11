import '../css/card.css';

// eslint-disable-next-line react/prop-types
export default function Card({ operario }) {

  // console.log(operario)

  // eslint-disable-next-line react/prop-types
  const nombre = operario.operAlineado
  // eslint-disable-next-line react/prop-types
  const busNumber = operario.bus;
  // eslint-disable-next-line react/prop-types
  const ubicacion = operario.ubicacion;

  return <article className="cardClass">
    <h3 id="operarioId">{nombre}</h3>
    <div id='locationData'>
      <h4 id="busId">{busNumber}</h4>
      <h4 id="locationId">{ubicacion}</h4>
    </div>
  </article>
}


