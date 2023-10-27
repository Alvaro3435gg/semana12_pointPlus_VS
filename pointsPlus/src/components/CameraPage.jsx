import React from 'react';
import "./Camara.css"
import Webcam from "react-webcam";
/*import '../components/App.css';*/
function CameraPage() {
    return (
        <div className="camaraContaianer">
        <Webcam  audio={false}
                 height={612}

                 screenshotFormat="image/jpeg"
                 ></Webcam>
            <button className="button-17" role="button">Scan</button>
        </div>
    );
}

export default CameraPage;
