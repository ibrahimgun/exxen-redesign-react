import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./watch.scss"
export default function Watch() {
    return (
        
        <div className="watch">
           <Link to="/"><div className="back">
                <ArrowBackOutlined />
                Home
            </div></Link>
            <video className="video" 
            autoPlay 
            progress 
            controls 
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            
            />
            
        </div>
        
    )
}
