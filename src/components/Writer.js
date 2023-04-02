import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const blogUrl = 'https://jsonplaceholder.typicode.com/users/';

const Writer = ({writerId}) => {
   
    const [writerDetails, setWriterDetails] = useState([]);
    const writerInfo = useSelector((state) => state.writer.writerDetailsInStore);

    console.log(writerInfo.username);
    console.log(writerInfo.email);
    // console.log(blogUrl+props.writerId);

    useEffect(() => {
        axios.get(blogUrl+writerId)
            .then((resp) => {
             
                    setWriterDetails(resp.data);
                    console.log(resp.data);
                   
              
               
            })
            .catch(e => console.log(e));
    },
        []);

    


    return (
        <div>
            <p>Posted by: {writerDetails.name}</p>
            <p>Email: <Link href={`mailto:${writerDetails.email}`}>{writerDetails.email}</Link></p>
            {/* <p>City: {writerDetails.address.city}</p> */}
        </div>
    );
};

export default Writer;