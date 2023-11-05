import './style.css';
import { setUpPages } from './worksheet.js';

document.querySelector('#data').innerHTML = `
  <div style="width:500px;margin:auto">
    <h2>Paginator Setup</h2>
    <div class="card">
      <div id="page-numbers"></div>
    </div>
  </div>
`;

setUpPages(document.querySelector('#page-numbers'));
