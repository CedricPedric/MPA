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



export default Library