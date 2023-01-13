import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootStore } from 'store/types';

export const useTypedSelector: TypedUseSelectorHook<RootStore> = useSelector;
