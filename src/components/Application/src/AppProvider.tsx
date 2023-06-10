import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { AppContext } from './useAppContext';
import { prefixCls as defaultPrefixCls } from '@/config';


interface AppProviderProps {
    prefixCls?: string;
}

const AppProvider: FC<PropsWithChildren<AppProviderProps>> = (props) => {
    const { children, prefixCls = defaultPrefixCls } = props;

    return (
        <AppContext.Provider value={{ prefixCls }}>
                {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
