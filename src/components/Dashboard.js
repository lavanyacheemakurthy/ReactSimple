import React, { Component } from 'react';
import StatefulApp from '../statedemo/StatefulApp';
import ChildParentInvoke from './childparents/ChildParentInvoke';
import ContextApp from './contextAPI/ContextApp'

import ErrorBoundary from './errorBoundary/ErrorBoundary';
import LifeCycleApp from './lifecycle/LifeCycleApp';
//import Button from './hooks/hook1';
import Button from './hooks/hook2';
import AppContext from './hooks/AppContext';
//Stateful class Component - Container
//import {Login} from './Login'
class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={'name':'Lav'}
  }
  render() {
    return (
      <div>
            {/* <h1>Name : {this.state.name}</h1>       */}
            {/* <Login portal="Visit ADP"/>       */}
            {/* <StatefulApp></StatefulApp>
            <ChildParentInvoke></ChildParentInvoke>
            <ContextApp></ContextApp>
            <LifecycleApp></LifecycleApp> */}
            {/* {
                <ErrorBoundary>
                    <LifeCycleApp></LifeCycleApp>
               </ErrorBoundary>
            } */}
             {/* <Button></Button> */}

            <AppContext></AppContext>
            
      </div>
    );
  }
}
export default Dashboard




