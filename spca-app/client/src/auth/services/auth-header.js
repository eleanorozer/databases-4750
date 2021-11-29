/**
 * Authentication Header
 *    - to access protected resources from the server
 * 
 * Check localStorage for `user` item. If there is a
 * logged in `user` with `accessToken` (JWT) return HTTP
 * Authorization header. Otherwise, return empty oject.
 */
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}