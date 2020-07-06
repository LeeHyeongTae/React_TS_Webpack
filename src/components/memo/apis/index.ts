import { Memo } from '../models'

let store: Memo[] = [
    { id: 2, content: '두번째 메모 입니다.', createAt: Date.now()},
    { id: 1, content: '첫번째 메모 입니다.', createAt: Date.now() - 1},
]

export const fetchMemoList = () =>
    store.filter(memo => !memo.deleted)
        .sort((a, b) => b.createAt! - a.createAt!);

export const fetchDeletedMemoList = () =>
    store.filter(memo => !!memo.deleted)
        .sort((a, b) => b.createAt! - a.createAt!);

export const fetchMemo = (memoId: number) =>
    store.find(m => m.id === memoId);

export const addMemo = (memo: Memo) => {
    const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
    memo.id = lastMemo ? lastMemo.id! + 1 : 1;
    memo.createAt = Date.now();
    store = [ memo, ...store ];
    return memo;
}

export const deleteMemo = (memoId: number) => {
    store = store.map(memo => ({
        ...memo,
        deleted: memo.id === memoId ? true: memo.deleted,
    }));
}

export const resotreMemo = (memoId: number) => {
    store = store.map(memo => ({
        ...memo,
        deleted: memo.id === memoId ? false : memo.deleted,
    }));
}