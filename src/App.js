import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider, connect} from 'react-redux';
import Counter from './counter'
import SearchOrders from './components/searchOrders/index'

class App extends Component {
  
  state = {
    store: this.props.store,
    globalEventDistributor: this.props.globalEventDistributor,
  };

  componentDidCatch(error, info) {
      console.log(error, info);
  }

  render() {
      console.log(this.props.store);
      
      let ret = <div>qwq</div>;

      if (this.state.store && this.state.globalEventDistributor) {
          ret =
              <Provider store={this.state.store}>
                  <div className="App" style={{marginTop: 100}}>
                  <SearchOrders/>
                      This was rendered by App1, which is written in React.
                      <Counter globalEventDistributor={this.state.globalEventDistributor}/>
                  </div>
              </Provider>
      }

      return ret;
  }
}

export default App;
