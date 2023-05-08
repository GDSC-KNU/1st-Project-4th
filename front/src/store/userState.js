import { selector } from "recoil";

export const getUserIsLoggedIn = selector({
    key: 'userLoginState',
    get: () => {
        const accessToken = localStorage.getItem('access_token')
        return !!accessToken
    },
//    set: ({ set }, newValue) => {
//     Cookies.set('access_token', newValue)
//    }
})