import { useContext } from 'react';
import { MyContext } from '../contexts/context';

export const useSignupContext = () => {
    const context = useContext(MyContext);
    return [context.state, context.updateSignupAction]
}