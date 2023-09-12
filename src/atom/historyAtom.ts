import { atom } from 'jotai';

// read only
export const historyIdAtom = atom<string[]>([]);

// write only
export const setHistoryIdAtom = atom(null, (get, set, { id }) => {
  set(
    historyIdAtom,
    get(historyIdAtom).length > 0 ? [...get(historyIdAtom), id] : [id],
  );
});
