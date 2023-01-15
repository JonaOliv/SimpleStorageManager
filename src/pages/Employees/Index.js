import NavigatorBar from '../../components/NavigatorBar';
import TableTemplate from '../../components/TableTemplate';

import HeaderTemplate from './components/HeaderTemplate';
import BodyTemplate from './components/BodyTemplate';
import TableBar from './components/TableBar';

import { Component } from 'react';

class Employees extends Component {
  render(){
    return (
      <div>
        <NavigatorBar/>
        <TableBar/>
        <TableTemplate header={<HeaderTemplate/>} body={<BodyTemplate/>}/>          
      </div>
    );
  }
}
  
export default Employees;