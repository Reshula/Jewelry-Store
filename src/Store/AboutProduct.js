import { data} from "../data";
import { useParams, useNavigate } from "react-router-dom";
const AboutProduct = () =>{
    const navigate = useNavigate();
    const { title } = useParams()

    return(
        <div>
            {data.filter((item) => item.title === title).map((elem, index) =>{
                return(
                    <div key={index}>
                        <p>{elem.name}</p>
                        <img 
                        src={`../${elem.img}.jpg`}
                        alt='jewelry'/>
                        <button onClick={() => navigate(-1)}> GO BACK</button>
                    </div>
                );
            })}
        </div>
    );
}
export default AboutProduct;