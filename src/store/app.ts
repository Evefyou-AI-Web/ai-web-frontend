import { atom } from "recoil";
import { prefixCls } from '@/config';

interface AppState {
    // project config
    projectConfig: {
        prefixCls: string
    };
}

export const appAtom = atom<AppState>({
    key: 'appAtom',
    default: {
        projectConfig: {
            prefixCls
        }
    } as AppState
});

