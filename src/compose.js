import React from 'react'
import './index.css';
import TinyMCE from './tinyMCE';
import { useParams } from 'react-router-dom';

export default function  Compose(props) {

    const {noteId} = useParams();
    console.log(noteId);
    
        return (
        <div className='col-lg-10 col-md-10 col-sm-12'>        

        <TinyMCE content = {noteId}/>

        </div>

        
    )
}


