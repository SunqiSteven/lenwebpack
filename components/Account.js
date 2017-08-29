import React  from 'react';
import {Link} from 'react-router-dom';

export default class Account extends React.Component {
    render(){
        return (
            <div>
                <Link to='accounts/1'><div>Account1</div></Link>
                <Link to='accounts/2'><div>Account2</div></Link>
                <Link to='accounts/3'><div>Account3</div></Link>
            </div>
        )
    }
}
