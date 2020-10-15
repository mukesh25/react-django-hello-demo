import React from 'react';
import logo from './logo.svg';
import './App.css';

import templates from './images/templates.PNG';
import staticfiles from './images/staticfiles.PNG';
import urls from './images/urls.PNG';
import files from './images/files.PNG';
import node_modules from './images/node_modules.PNG';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
              Django + React Hello World App
          </h1>

          <p>I put this demo together for anyone looking to add React to Django.</p>
          <p>Want to see a Django-React ToDo app.</p>
          <a
            className="App-link"
            href="https://github.com/mukesh25/react-django-hello-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>

          
          <a
            className="App-link"
            href="https://www.facebook.com/mukeshkumar1012"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Profile
          </a>

        </div>

        <div class="instructions">
            <h3>Django + React configuration instructions</h3>

            <h4>Steps:</h4>

            <ol>
              <li>Create react project with npx "create-react-app"</li>
              <li>Ensure react app is in root directory of django app.</li>
              <img class="" src={files} />
              <li><strong>urls.py</strong>: Configure root urls.py file</li>
              <ul>
                <li>Configure root urls.py file: "from django.views.generic import TemplateView"</li>
                <li>Add url path: "path('', TemplateView.as_view(template_name='index.html'))"</li>
                <img class="" src={urls} />
              </ul>
              <li><strong>settings.py</strong>: Add path to TEMPLATES varible and configure static files</li>
              <ul>
                <li>Templates:</li>
                <img class="" src={templates} />
                <li>Static Files:</li>
                <img class="" src={staticfiles} />
              </ul>
              <li>If you downloaded the source code from this demo, ensure you have node_modules in your react app before you run "npm run build". I had to exclude this file due to file size limit with github.</li>
              <img class="" src={node_modules} />
            </ol>


        </div>
      </header>
    </div>
  );
}

export default App;
