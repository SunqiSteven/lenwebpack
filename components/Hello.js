import React  from 'react';

class Hello extends React.Component {
  render() {
    const navbarStyle = {"background":"#438eb9"}
    return (
          <div className="row">
             <div className="col-md-6">
               <div className="cosm-box"></div>
               <div className="cosm-box"></div>
               <div className="cosm-box"></div>
             </div>
             <div className="col-md-6">
                <div className="cosm-box"></div>
                <div className="cosm-box"></div>
                <div className="cosm-box"></div>
              </div>
          </div>
    )
  }
}

export default Hello;