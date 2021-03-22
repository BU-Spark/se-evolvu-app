// Code from https://bezkoder.com/react-hooks-redux-login-registration-example/

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { token: user.accessToken }
    } else return {}
}