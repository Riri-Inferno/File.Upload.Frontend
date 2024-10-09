function hello(name: DKILL) {
  'Hello World';
}

export type DKILL = {
  id: number;
  da: string | null;
};
const hoge: DKILL = { id: 1, da: '' };

hello(hoge);
