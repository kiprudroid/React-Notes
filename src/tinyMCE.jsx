import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './App.css';
import {useState} from 'react'
import api_key from './env'


export default function TinyMCE() {

  const [html , setHTML] = useState(null);


  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setHTML(editorRef.current.getContent());
    }

    alert(html)
        fetch('/data',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({html : html})
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

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
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          
        }}
      />
      <button onClick={log}>Alert</button>
    </>
  );
}