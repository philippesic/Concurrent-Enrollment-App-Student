import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from "react-router-dom";
import App from './App'
import AuthState from './utils/auth/AuthState';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <AuthState database='team_x'>
      <Router>
		    <App />
      </Router>
    </AuthState>
	</React.StrictMode>
)