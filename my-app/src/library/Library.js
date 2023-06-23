import React from "react"
import "./Library.scss"
import MusicCard from "../musiccard/MusicCard";

const Library = () =>{
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/music")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    console.log(data)


    return(
        <div className="CardContainers">
            {!data ? "Loading..." :   <Content data={data}/>}
            <button onClick={() => AddToLibrary("test","test","test","test")}>click me</button>
        </div>
    )
}

const Content = ({ data }) => {
    return (
        <div  className="CardContainers">
            {data.map((data, index) => {
                return (
                    <MusicCard  title={data.name} artist={data.artist} genre={data.genre} image={data.image}></MusicCard>
                )
            })}
        </div>
    )
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
export default Library