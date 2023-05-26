import { useState } from "react"
import Header from "./Header"
import PicCard from "./PicCard"
const Main = () => {
    
    const [savedPics , setSavedPics] = useState([])
    return (
        <div className="main">
            <Header/>
            <PicCard savedPics={savedPics} setSavedPics={setSavedPics}/>
        </div>
    )
    
}
export default Main