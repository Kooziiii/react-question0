
import CheckBox from '../../Components/Atoms/CheckBox';
import {connect} from 'react-redux';

class PalentScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOns: [],
      };
    }
    render(){
      const testList = [
        'aaa',
        'bbb',
        'ccc',
      ];
      {testList.map((data, index) => {
        return (
          <CheckBox
          　isOn={this.state.isOns.includes(index)}
            onPress={() =>
              checkBoxonClick(this, 'isOns', index)
            }
          />
        );
      })}
    }
  }

  const mapStateToProps = state => {
    return {};
  };
  
  const mapDispatchToProps = dispatch => {
    return {};
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PalentScreen);
  
  