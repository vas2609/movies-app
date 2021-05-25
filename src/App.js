/* eslint-disable no-undef */
import './App.css';
import "antd/dist/antd.css";
import {Spin} from 'antd';
import Main from './components/mainComponent/Main';
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Single from './components/singlComponent/Single';
import Header from './components/header/heade';
import Footer from './components/footer/Footer';

function App(props) {


  
let { load } = props;
  
  return (
    <div className="pageContainer">
      <div className="pageWrapper">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/single/:id" exact component={Single} />
        </Switch>
      </div>
      {load && (
        <div className="spinner">
          <Spin />
        </div>
      )}
      <Footer />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    load: state.loading,
  };
};


export default connect(mapStateToProps)(App);
