import React, {Component} from 'react';
import Aux   from '../AuxContainer/AuxContainer';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        showSidedrawer: false
    }

    closeSidedrawerHandler = () => {
        this.setState({showSidedrawer: false})
    }

    toggleSidedrawerHandler =() => {
        // Not a good way of doing it, since the state depends on old state:
        // this.setState({showSidedrawer: !this.state.showSidedrawer})

        //The correct way of setting a state when it depends on an old state
        this.setState((prevState) => {
            return {showSidedrawer: !prevState.showSidedrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar clicked={this.toggleSidedrawerHandler}/>
                <SideDrawer open={this.state.showSidedrawer} close={this.closeSidedrawerHandler}/>
                <main className={classes.Content}> 
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 

export default Layout;