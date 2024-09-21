import React from 'react'
import './index.css';
import TinyMCE from './tinyMCE';
import { useParams } from 'react-router-dom';

export default function  Compose(props) {

    const {noteId} = useParams();


    const [data, setData] = React.useState({});

    React.useEffect(() => {
        fetch(`http://localhost:5000/spec/${noteId}`)
            .then(response => response.json())
            .then(data => {setData(data)
                console.log(data);
                
            });
    }, [noteId])

    console.log(noteId);
    
        return (
        <div className='col-lg-10 col-md-10 col-sm-12'>        

        <TinyMCE content = {data.htmlContent}/>

        </div>

        
    )
}


