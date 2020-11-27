export default {
  login_url: process.env.API_URL + '/login',
  logout_url: process.env.AUTH_LOGOUT_URL,
  user_endpoint: process.env.API_URL + '/api/user',
  csrf_cookie_url: process.env.API_URL + '/sanctum/csrf-cookie'
}
