var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mutate } from 'swr';
import useSWRImmutable from 'swr/immutable';
/**
 *
 * @param key Key for SWR
 * @returns
 */
export const useSyncSWR = (key) => {
    const state = useSWRImmutable(key, () => __awaiter(void 0, void 0, void 0, function* () { return undefined; }));
    return state.data;
};
/**
 *
 * @param key - Key for SWR
 * @param value - Value to set, can be a function that receive previous value as arg, or a value
 */
export const setSyncSWR = (key, value) => __awaiter(void 0, void 0, void 0, function* () {
    const updaterFn = (c, p) => {
        if (typeof value === 'function') {
            return value(p);
        }
        else {
            return value;
        }
    };
    mutate(key, undefined, { populateCache: updaterFn, revalidate: false });
});
//# sourceMappingURL=index.js.map