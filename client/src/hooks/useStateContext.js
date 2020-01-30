import { useContext } from 'react';
import { MyContext } from '../contexts/context';

export const useStateContext = () => {
    const context = useContext(MyContext);
    return [context.state, context.updateAction]
}

