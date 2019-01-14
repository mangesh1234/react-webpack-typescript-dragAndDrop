import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ParentComponent  from './components/ParentComponent';
import './components/DragComponent.css'
declare let module: any

ReactDOM.render(<ParentComponent  />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}