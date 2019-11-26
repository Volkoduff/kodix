import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/media-queries.css'
import './scss/main.scss'

import AppController from './components/controllers/app-controller';

const appController = new AppController();
appController.init();
