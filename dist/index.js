import { mutate } from 'swr';
import useSWRImmutable from 'swr/immutable';
/**
 *
 * @param key Key for SWR
 * @returns
 */
export const useSyncSWR = (key) => {
    const state = useSWRImmutable.default(key);
    return state.data;
};
/**
 *
 * @param key - Key for SWR
 * @param value - Value to set, can be a function that receive previous value as arg, or a value
 */
export const setSyncSWR = (key, value) => {
    const updaterFn = (c, p) => {
        if (typeof value === 'function') {
            return value(p);
        }
        else {
            return value;
        }
    };
    mutate(key, undefined, { populateCache: updaterFn, revalidate: false });
};
//# sourceMappingURL=index.js.map