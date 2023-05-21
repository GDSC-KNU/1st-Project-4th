import { atom, selector } from "recoil";

const localStorageEffect = key => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
  
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const accessTokenState = atom({
    key: 'accessTokenState',
    default: localStorage.getItem('access_token') || null,
    effect: [
        localStorageEffect
    ]
});

// export const getUserIsLoggedIn = selector({
//     key: 'userLoginState',
//     get: ({get}) => {
//         const accessToken = get(userTokenState)
//         return !!accessToken
//     },

// })

// export const userState = atom({
//     key: 'userTokenState',
//     default: null,
//     // effect: [
//     //     localStorageEffect
//     // ]
// });