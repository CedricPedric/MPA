import tempimage from '../images/ArticMonkeys.jpg';
import "./MusicCard.scss"

const MusicCard = ({title,artist,genre,image}) =>{

    return(
    <div className='MusicCard' onClick={() => AddToLibrary(title,artist,genre,image)}>
            <img className='MusicCardImages' src={tempimage} alt="Logo"></img>
            <h2 className='MusicTitle'>{title}</h2>
            <h3 className='Description'>{artist}</h3>
            <p className="Description">{genre}</p>
        </div>)
}

const AddToLibrary = (title,artist,genre,image) => {
    console.log(title)

    fetch('/api/addmusic', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: title,
            artist: artist,
            genre: genre,
            image: image,
        })
    }).then(() => console.log("its been pressed"))
}
export default MusicCard