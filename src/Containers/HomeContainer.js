import {connect} from 'react-redux'
import Home from '../Components/Home'
import { addToCart, removeFromCart } from '../Services/Actions/Action'
const mapStateToProps = state =>({
      
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeFromCartHandler:  data=>dispatch(removeFromCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
















// export default Home
