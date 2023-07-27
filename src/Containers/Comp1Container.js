import {connect} from 'react-redux'
import Comp1 from "../Components/Comp1";
import { addDataToComp } from '../Services/Actions/Action';


const mapStateToProps = state =>({
      
})
const mapDispatchToProps = dispatch => ({
    addMyCompData : data=>dispatch(addDataToComp(data))
})
 export default connect(mapStateToProps,mapDispatchToProps)(Comp1)