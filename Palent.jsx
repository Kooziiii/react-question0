
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
          <View>
            {/*CheckBoxについて質問をさせていただきたいです。*/}
            <CheckBox
              isOn={this.state.isOns[index]}
              onPress={() => {
                this.state.isOns[index] = !this.state.isOns[
                  index
                ];
                this.setState({isOns: this.state.isOns});
              }}
            />
            <Text>{data}</Text>
          </View>
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
  
  