// 1) Ask for the user name
let userName = prompt('Saisissez votre identifiant')

if (confirm('Accéder au compte')) {
  // 2) A login message is displayed 
  alert('Connexion de ' + userName + ' !')
} else {
  // 3) A logout message is displayed
  alert('Déconnexion de ' + userName + ' !')
}

// 4) The user name is displayed in the console.
console.log(userName)
