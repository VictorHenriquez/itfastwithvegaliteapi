import * as vega from 'vega';
import { View } from 'vega';
import * as vegaLite from 'vega-lite';
import vl from 'vega-lite-api';
import { Handler } from 'vega-tooltip';
import { config } from './config';
import { getData } from './getData';
import { viz } from './viz';
import logo from './logo.svg';
import './App.css';

vl.register(vega, vegaLite, {
  view: {render: 'svg' }, // view: {render: 'canvas' }, for more than 10,000 data or points...
  init: view => { view.tooltip(new Handler().call); }
});

const run = async () => {
  const marks = viz
  .data(await getData())
  .width(window.innerWidth)
  .height(window.innerHeight)
  .autosize({type: 'fit', contains: 'padding'})
  .config(config);

  document.body.appendChild(await marks.render());
};



function App() {
  return (
    run()
  );
}

export default App;
