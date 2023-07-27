import Comp2 from "../Components/Comp2";
import {connect} from 'react-redux'
const mapStateToProps = state =>({
    data : state.compData
})
const mapDispatchToProps = dispatch => ({
  
})
export default connect(mapStateToProps,mapDispatchToProps)(Comp2)