import tempimage from '../images/ArticMonkeys.jpg';
import "./MusicCard.scss"

const MusicCard = ({title,artist,genre,image}) =>{

    return(
    <div className='MusicCard'>
            <img className='MusicCardImages' src={tempimage} alt="Logo"></img>
            <h2 className='MusicTitle'>{title}</h2>
            <h3 className='Description'>{artist}</h3>
            <p className="Description">{genre}</p>
        </div>)
}

export default MusicCard