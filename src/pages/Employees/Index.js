import NavigatorBar from '../../components/NavigatorBar';
import TableTemplate from '../../components/TableTemplate';

import HeaderTemplate from './components/HeaderTemplate';
import BodyTemplate from './components/BodyTemplate';
import TableBar from './components/TableBar';

function Employees(props){
  return (
    <div>
      <NavigatorBar currentPageNavbar={props.currentPageNavbar}/>
      <TableBar/>
      <TableTemplate header={<HeaderTemplate/>} body={<BodyTemplate/>}/>          
    </div>
  );
}

  
export default Employees;