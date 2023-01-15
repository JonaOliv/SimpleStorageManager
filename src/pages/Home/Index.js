import NavigatorBar from '../../components/NavigatorBar';
import { Component } from 'react';

class Home extends Component {
  render(){
    return (
      <div>
        <NavigatorBar/>
        <img src={process.env.PUBLIC_URL + '/img/desk-table-workspace-office-living-room-furniture-944600-pxhere.com.jpg'} 
        className='img-fluid shadow-4' alt='...' 
        style={{
          width: '100%',
          height: '100%'
        }}
        />
      </div>
    );
  }
}
  
export default Home;