import { mutate } from 'swr'
import useSWRImmutable from 'swr/immutable'

/**
 * 
 * @param key Key for SWR
 * @param initialState Initialstate value
 * @returns 
 */
export const useSyncSWR = (key: string, initialState: unknown) => {
    const state = useSWRImmutable(key, async () => initialState)
    return state.data as unknown
}

/**
 * 
 * @param key - Key for SWR
 * @param value - Value to set, can be a function that receive previous value as arg, or a value
 */
export const setSyncSWR = (key: string, value: (unknown | ((previous: unknown) => unknown))) => {
    const updaterFn = (c: unknown, p: unknown) => {
        if (typeof value === 'function') {
            return value(p) as unknown
        } else {
            return value
        }
    }
    mutate(key, undefined, { populateCache: updaterFn, revalidate: false })
}
