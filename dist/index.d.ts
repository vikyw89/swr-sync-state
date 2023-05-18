/**
 *
 * @param key Key for SWR
 * @returns
 */
export declare const useSyncSWR: (key: string) => unknown;
/**
 *
 * @param key - Key for SWR
 * @param value - Value to set, can be a function that receive previous value as arg, or a value
 */
export declare const setSyncSWR: (key: string, value: unknown) => void;
