import React, { Component } from 'react'; 

import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
 
 

class App extends Component {    

  componentDidMount() {
    if (this.props.catPics.length === 0)
      this.props.actions.fetchCats();
  }
  
  render() {

    console.log(this.props.catPics) // log will fire every time App renders 

    return (
      <div>
        <h1>CatBook</h1> 
        <CatList catPics={this.props.catPics} />
        {/* add CatList component here */}
      </div>
    );
  }
} //

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}  

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}  

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)

//export default connect(mapStateToProps, mapDispatchToProps)(App)

//export default connect(mapStateToProps)(App)

//export default App

