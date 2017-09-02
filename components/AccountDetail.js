import React from 'react';

class AccountDetail extends React.Component {
    state={id:333}
    componentDidMount(){
        // console.log(this.props.match)
        var id = this.props.match.params.id;
        console.log(id);
        var self = this;
        this.setState({id:id});
   }
    render(){
        // console.log(this.state);
    return (
        <div>{this.state.id}</div>
      )
  }
}

export default AccountDetail;