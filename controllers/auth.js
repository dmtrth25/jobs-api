const login = async (req, res) => {
   res.send('Login user')
}

const register = async (req, res) => {
   res.send('Register user')
}

module.exports = {
   login,
   register
}