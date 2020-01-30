import React, { Component, createContext } from 'react';

export const ObserverContext = createContext();

class ObserverProvider extends Component {
    state = {
        isCrossed:false
    }
    handleCrossing = (isCrossed) => {
        if(isCrossed!==this.state.isCrossed){
            this.setState({
                isCrossed: isCrossed
            })
        }
    }
    render(){
        return(
            <ObserverContext.Provider
                value={{ ...this.state, 
                        handleCrossing: this.handleCrossing 
                    }}
            >
                {this.props.children}
            </ObserverContext.Provider>
        );
    }
}

export default ObserverProvider;