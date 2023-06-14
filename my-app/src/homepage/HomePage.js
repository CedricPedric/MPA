import "./HomePage.scss"
import MusicCard from "../musiccard/MusicCard"


const HomePage = () => {

    return(
    <div className='HomePage'>
        <div className='GenreContainer'>
            <div className='GenreCard'>
            <h2 className='GenreText'>Rock</h2>
            </div>

            <div className='GenreCard'>
            <h2 className='GenreText'> Pop</h2>
            </div>

            <div className='GenreCard'>
            <h2 className='GenreText'>Classical</h2>
            </div>

            <div className='GenreCard'>
            <h2 className='GenreText'>Rap</h2>
            </div>

            <div className='GenreCard'>
            <h2 className='GenreText'>Jazz</h2>
            </div>
        </div>

        <div className='MusicCardContainers'>
            <MusicCard title={"Snap out of it"} artist={"Artic Monkeys"} genre={"Rock"} />
        </div>
    </div>
    )
}

export default HomePage