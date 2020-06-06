import React, {Component} from 'react';
import Aux   from '../../hoc/AuxContainer';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from './Layout.css';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        showSidedrawer: true
    }

    showSidedrawerHandler = () => {
        this.setState({showSidedrawer: false})
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSidedrawer} close={this.showSidedrawerHandler}/>
                <main className={classes.Content}> 
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 

export default Layout;