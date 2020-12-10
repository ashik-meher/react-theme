import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Tap from './Tap';
import 'bootstrap/dist/css/bootstrap.min.css';



/*ReactDOM.render(
  <React.StrictMode>
	<App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*ReactDOM.render(<div><h1>Hello world!</h1><p>This is me</p></div>, document.getElementById("root"));


var myPara = document.createElement("p");
myPara.innerHTML = "Duda";

ReactDOM.render(<div><ul><li>1</li><li>2</li><li>3</li></ul></div>, document.getElementById("root"));*/

/*function MyInfo() {

	return (
		<div>
			 <h1>My Name is Hello world</h1>
			  <ul> <p>My Passion are</p>
				<li>Coding</li>
				<li>Business Development</li>
				<li>QA</li>
			  </ul>
		</div>
			);

}
//migrating component MyInfo in another file
*/

var greet = "Hello, World!";


ReactDOM.render(<Tap />, document.getElementById("root"));

//ReactDOM.render(greet, document.getElementById("root"));