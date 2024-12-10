import { StyleHatch } from "./hatchStyles";


const Hatch = ({hatchData:{id, nr, text, img, open}, handleClick})=>
(
    <StyleHatch background={img} onClick={()=>handleClick (id)} >
        <div className = { open ? "front open" : "front"}>
            <p> {nr}</p>
        </div>
        <div className = { open ? "back open" : "back"}>
            <p> {text}</p>
        </div>
    </StyleHatch>
      

);

export default Hatch;