import LocationIc from '../assets/location-ic.svg'

export default function Cards() {
    return (
        <div className='card-container'>
            <img className='card-image' src='https://source.unsplash.com/WLxQvbMyfas' width={100}></img>
            <div className='card-info'>
                <div className='location'>
                    <h3><span><img src={LocationIc}></img></span>Japan</h3>
                    <a href='https://goo.gl/maps/1DGM5WrWnATgkSNB8' target='_blank'>View on Google Maps</a>
                </div>
                <h2>Mount Fuji</h2>
                <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}