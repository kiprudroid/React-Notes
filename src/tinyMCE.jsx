import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './App.css';
import {useState} from 'react'
import api_key from './env'
import axios from 'axios'


export default function TinyMCE() {

  const [html , setHTML] = useState({
    html : ''
  });


  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      // setHTML({...html, html : editorRef.current.getContent()});
    }
  
    axios.post('http://localhost:5000/data', {
      data: html.html
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

   

  };

 
  return (
    <>
      <Editor
        className = 'bg-info m-3'
        apiKey= {api_key}
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue="<p><b>Write Your Note</b>.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor backcolor underline| alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          setup: (editor) => {
            editor.on('Change', () => {
              setHTML({...html, html : editorRef.current.getContent()});
            });
          },
         
          
        }}
      />
      <button className='btn btn-outline-primary m-3' onClick={log}>Save</button>
    </>
  );
}