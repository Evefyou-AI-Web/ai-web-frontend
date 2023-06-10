import { Context, createContext, useContext } from 'react';
import { prefixCls } from '@/config';

export interface AppContextProps {
    prefixCls: string;
}

export const createAppContext = (props: AppContextProps) =>
    createContext(props);

export const defaultValue: AppContextProps = {
    prefixCls,
}

export const AppContext = createAppContext(defaultValue);

export const useAppContext = () => useContext(AppContext);
