import {
  createContext, useContext,
} from 'react';
import { useImmer } from 'use-immer';

const MeshContext = createContext(null);

export function MeshProvider({ defaultValues, children }) {
  const [ value, setValue ] = useImmer([
    {
      ...defaultValues,
      _id: 'myId',
      _mine: true,
      _leader: false,
    },
    {
      ...defaultValues,
      _id: 'leaderId',
      _mine: false,
      _leader: true,
    },
    {
      ...defaultValues,
      _id: 'randoId',
      _mine: false,
      _leader: false,
    },
  ]);
  window.setValue = (cb) => setValue((draft) => {
    const res = cb(draft[0]);
    if (res !== undefined) draft[0] = res;
  });

  return (
    <MeshContext.Provider value={value}>
      {children}
    </MeshContext.Provider>
  );
}

export function useMeshContext() {
  return useContext(MeshContext);
}