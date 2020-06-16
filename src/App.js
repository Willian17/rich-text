import React from 'react';
import 'froala-editor/js/froala_editor.pkgd.min.js';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';
import './App.css';

function App() {
  return (
    <div className="App">
      <FroalaEditor tag='textarea'/>
        
    </div>
  );
}

export default App;
