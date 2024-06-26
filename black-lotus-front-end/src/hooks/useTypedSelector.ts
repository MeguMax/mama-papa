import { TypeRootState } from '@/services/store/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
