import React from 'react';
import 'whatwg-fetch';
class AccountDetail extends React.Component {
    state={id:333}
    componentDidMount(){
        // console.log(this.props.match)
        var id = this.props.match.params.id;
        console.log(id);
        var self = this;
        this.setState({id:id});
        // fetch('http://www.gailougaoshou.com/intelvest/api/user/8018')
        //   .then((response)=>response.json())
        //   .then((jsonbody)=>{
        //     console.log(jsonbody);
        //   })
   }
    render(){
        // console.log(this.state);
    return (
        <div>{this.state.id}</div>
      )
  }
}

export default AccountDetail;