import { PeerStore } from '@galileocap/peer-mesh';

export const usePeerStore = new PeerStore();
usePeerStore.init({ number: 0 }, { number: 0 });
