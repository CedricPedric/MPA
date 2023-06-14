import image from '../images/ArticMonkeys.jpg';
import "./MusicCard.scss"

const MusicCard = ({title,artist,genre}) =>{

    return(
    <div className='MusicCard'>
            <img className='MusicCardImages' src={image} alt="Logo"></img>
            <h2 className='MusicTitle'>{title}</h2>
            <h3 className='Description'>{artist}</h3>
            <p className="Description">{genre}</p>
        </div>)
}

export default MusicCard