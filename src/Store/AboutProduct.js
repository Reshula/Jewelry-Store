import { data} from "../data";
import { useParams, useNavigate } from "react-router-dom";
const AboutProduct = () =>{
    const navigate = useNavigate();
    const { title } = useParams()

    return(
        <div className="dinamic-container">
            {data.filter((item) => item.title === title).map((elem, index) =>{
                return(
                    <div key={index}>
                      
                        <img 
                        src={`../${elem.image}.jpg`}
                        alt='jewelry' width='250px'/>
                        <p>{elem.jewName}</p>
                        <p>{elem.info}</p>
                        <p>{elem.price}</p>
                        <button className="btn-go-back" onClick={() => navigate(-1)}> GO BACK</button>
                    </div>
                );
            })}
        </div>
    );
}
export default AboutProduct;