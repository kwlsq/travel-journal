import LocationIc from '../assets/location-ic.svg'

export default function Card(props) {
    return (
        <div className='card-container'>
            <img className='card-image' src={props.imageUrl} width={100}></img>
            <div className='card-info'>
                <div className='location'>
                    <h3><span><img src={LocationIc}></img></span>{props.location}</h3>
                    <a href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}