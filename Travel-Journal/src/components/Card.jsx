export default function Card(props){
  return (
    <div>
    <div className="card-container">
      <img src={`./images/${props.imageUrl}`} />
      <div className="text-container">
        <div className="card-top">
          <img src={`./images/maplogo.png`} className="map-logo"/>
          <span className="location">{props.location}</span>
          <a className="common-text" href={props.googleMapsUrl}>View on Google Maps</a>
          <p className="title">{props.title}</p>        
        </div>
        <div className="card-content">
          <span className="date">{props.startDate}-{props.endDate}</span>
          <p className="description">{props.description}</p>
        </div>
      </div>
      
    </div>
    <hr />
    </div>
    
  )}
