import "./../assets/css/connexion.css"

function Connexion() {
    let switchCtn = document.querySelector("#switch-cnt");
    let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);
    return (
      <div className="App">
        <head>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" type="text/css" href="main.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="main">
            <div className="container a-container" id="a-container">
              <form id="a-form" className="form" method="" action="">
                <h2 className="form_title title">Créer un compte</h2>
                <div className="form__icons">
                  <div className="form__icon"></div>
                  <div className="form__icon"></div>
                  <div className="form__icon"></div>
                </div>
                <span className="form__span">Ou utilisez un mail pour s'enregistrer</span>
                <input className="form__input" type="text" placeholder="Nom" />
                <input className="form__input" type="text" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Mot de passe" />
                <button className="form__button button submit" type="submit">Creer un compte</button>
              </form>
            </div>
  
            <div className="container b-container" id="b-container">
              <form id="b-form" className="form" method="" action="">
                <h2 className="form_title title">On se retrouve de l'autre de cote</h2>
                <div className="form__icons">
                  <div className="form__icon"></div>
                  <div className="form__icon"></div>
                  <div className="form__icon"></div>
                </div>
                <span className="form__span">Ou utilisez votre adresse mail</span>
                <input className="form__input" type="text" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Password" />
                <a href="#" className="link">Mot de passe oublie ?</a>
                <button className="form__button button submit" type="submit">Connexion</button>
              </form>
            </div>
          </div>
        </body>
      </div>
    );
  }
  
  export default Connexion;