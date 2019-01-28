import * as React from 'react';
import { connect } from 'react-redux';

interface IformData{
  orderSum: string | number,
}
interface IProps{
  formData: IformData,
  saveFormData: (value:string, name:string) => void,
}
class Home extends React.Component<IProps, any>{
  public handleInput = (name: string, event:any) => {
    let value = event.target.value;
    switch(name){
      case 'orderSum':
        value = value.replace(/\D/g, '');
      break;
      case 'name':
      break;
      case 'phoneNo':
        value = value.replace(/\D/g, '');
      break;
      default:;
    }
    this.props.saveFormData(value, name);
  }

  public render(){
    const {formData} = this.props;
    return (
      <main className="home-container">
        <p className="common-title">Enter your Info</p>
        <form className="home-form">
          <div className="home-form-item">
            <span>Amount:</span>
            <input type="text" placeholder="Please enter amount" value={formData.orderSum} />
          </div>
        </form>
      </main>
    )
  }
}

export default connect()(Home);