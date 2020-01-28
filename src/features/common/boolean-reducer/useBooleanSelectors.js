import {useSelector} from "react-redux";

export const selectBooleans = (store, names) => {
    const result = [];
    for (const n of names) {
        result.push(store.booleans.booleans.find(b => b.name === n) || {name: n, value: false, data: {}});
    }
    return result;
};

export const useBooleanSelector = (names) => {
    return useSelector((store) => selectBooleans(store, names));
};
