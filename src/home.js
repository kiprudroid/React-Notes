import React,{useState , useEffect} from 'react';
import ListItem from "./listItem.js"
import moment from 'moment';



function getFirstElementContent(htmlString) {
    // Create a new DOM parser
    const parser = new DOMParser();
    
    // Parse the HTML string into a DOM document
    const doc = parser.parseFromString(htmlString, 'text/html');
    
    // Get the first child element of the body (this assumes your htmlString starts at the body level)
    const firstElement = doc.body.firstElementChild;
    
    // If there's a first element, return its text content (without any tags or nested tags)
    return firstElement ? firstElement.textContent : null;
}

// Example usage
const htmlString = '<div><span>Hello <strong>World</strong></span></div>';
const firstElementContent = getFirstElementContent(htmlString);
console.log(firstElementContent);  // Outputs: "Hello World"


function returnDate(date){

    const dateObject = new Date(date);

    if(dateObject == "Invalid Date"){
        return ""
    }

    return moment(dateObject).format('DD MMM')
}

export default  function Home() {


    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => {
        res.json().then((data) => setData(data));
        
      })
      
  }, []);


    return(
        <div className="col-lg-10 col-md-10 col-sm-12">
       <div className = "row">
        <div className="col-lg-8 col-md-8 col-sm-12 m-auto card mt-3  border" style={{
            background : "rgb(3,3,3)"
        }}> 
            <div className="card-header m-auto">
                <h1 className="text-center h2 text-white">
                    Recent Notes
                </h1>
            </div>
            <div className="card-body border-top">
                <p className="text-center p text-light">
                    <div className="row">

                   <table className="table">
                        <tr className="border-bottom">
                            <th className="border-right border-white">
                                Date
                            </th>
                            <th className="border-right">
                                Title
                            </th>
                            
                        </tr>
                        <tbody className="border-bottom " style={{background : "rgb(3,3,3)"}}>

                            {data.map((datum)=> <ListItem key={datum._id} dateCreated = {returnDate(datum.date)}  title = {getFirstElementContent(datum.htmlContent)}/>) }


                           
                        </tbody>
                   </table>
                    </div>
                </p>
            </div>

        </div>

       </div>
        </div>
    )
        
    
}