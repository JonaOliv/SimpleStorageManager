import NavigatorBar from '../../components/NavigatorBar';
import { Component } from 'react';

class NoPage extends Component {
  render(){
    return (
      <div>
        <NavigatorBar/>
        <img src={process.env.PUBLIC_URL + '/img/index.jpeg'} className='img-fluid shadow-4' alt='...' />
      </div>
    );
  }
}
  
export default NoPage;