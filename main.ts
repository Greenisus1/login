function Login () {
    Email = game.ask(game.askForString("E-mail"))
    Password = game.ask(game.askForString("Password"))
}
let Password = false
let Email = false
Login()
game.splash("E-mail =", Email)
game.splash("Password =", Password)
