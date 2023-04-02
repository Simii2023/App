import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const parentDataInParent = 'Sonu';
    const [childDataInParent, setChildDataInParent] = useState('');

    const getDataFromChild = (arg) => {
        console.log('getDataFromChild');
        setChildDataInParent(arg);
    };

    return (
        <div>
            <p className="display-5" >Parent -</p>
            <p>Parent data in parent: {parentDataInParent}</p>
            <p>Child data in parent: {childDataInParent}</p>
            <Child passData={parentDataInParent} passFun={getDataFromChild} />
        </div>
    );
};

export default Parent;

// import Child from "./Child";

// const Parent=()=>{
//     const parentDataInParent="sonu";
//     return(
//         <div>
//             <p>Parent -</p>
//             <p>Parent data in parent:{parentDataInParent}</p>
//            <Child passData={parentDataInParent}/>
//         </div>
//     );
    
// };
// export default Parent;
