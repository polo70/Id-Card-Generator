//import axios from 'axios';
import React from 'react'
import "./Downloadcard.css";
function Downloadcard() {
    // function Down() {
    //     axios({
    //         url: 'url of the created id card',
    //         method: 'GET',
    //         responseType: 'blob'
    //     })
    //         .then((response) => {
    //             const url = window.URL.createObjectURL(new Blob([response.data]))
    //             const link = document.createElement('a')
    //             link.href = link
    //             link.setAttribute('download', 'card.pdf')
    //             document.body.appendChild(link)
    //             link.click()
    //         })
    //}
    return (
        
        <a href= "id.pdf" download>

        <div className="downContainer">
             <div>
                 <button className="downBtn" >
                     <span>Download &#8595;</span>
                 </button>
                 <img style={{width: '100%'}} 
                 src="https://svn.apache.org/repos/asf/incubator/ooo/symphony/trunk/main/extras/source/gallery/symbols/Icon-Document04-Blue.png"/>
             </div>
         </div>
        </a>
    )
}

export default Downloadcard
