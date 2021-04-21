// Code from https://bezkoder.com/react-hooks-redux-login-registration-example/

export const authHeader = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (user && user.token) {
        return  user.token 
    } else return null
}