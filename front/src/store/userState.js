import { selector } from "recoil";

export const getUserIsLoggedIn = selector({
    key: 'userLoginState',
    get: () => {
        const accessToken = localStorage.getItem("key_value");
        return !!accessToken
    },
})