function Offcanvas(selector) {

    this.offcanvas = document.querySelector(selector)

    this.open = function () {
        this.offcanvas.classList.remove('close')
    }

    this.close = function () {
        this.offcanvas.classList.add('close')
    }
}

function Game() {

    this.game = document.querySelector('.game')
    this.gameCards = document.querySelectorAll('.card-constraction')
    this.gameObjectives = document.querySelectorAll('.card-objective')
    this.btnNext = document.querySelector('.btn-next-cards')
    this.btnRepeat = document.querySelector('.btn-newgame')
    this.btnNext
    this.btnRestart
    this.counter = 0
    this.mode = 1
    this.objectives = []
    this.cards = [
        {
          "number": 1,
          "effect": "fence"
        },
        {
          "number": 1,
          "effect": "park"
        },
        {
          "number": 2,
          "effect": "park"
        },
        {
          "number": 4,
          "effect": "park"
        },
        {
          "number": 5,
          "effect": "park"
        },
        {
          "number": 5,
          "effect": "park"
        },
        {
          "number": 11,
          "effect": "real_estate"
        },
        {
          "number": 11,
          "effect": "real_estate"
        },
        {
          "number": 12,
          "effect": "real_estate"
        },
        {
          "number": 14,
          "effect": "real_estate"
        },
        {
          "number": 15,
          "effect": "real_estate"
        },
        {
          "number": 6,
          "effect": "park"
        },
        {
          "number": 7,
          "effect": "park"
        },
        {
          "number": 7,
          "effect": "park"
        },
        {
          "number": 8,
          "effect": "park"
        },
        {
          "number": 8,
          "effect": "park"
        },
        {
          "number": 9,
          "effect": "park"
        },
        {
          "number": 9,
          "effect": "park"
        },
        {
          "number": 10,
          "effect": "park"
        },
        {
          "number": 11,
          "effect": "park"
        },
        {
          "number": 11,
          "effect": "park"
        },
        {
          "number": 13,
          "effect": "temp_worker"
        },
        {
          "number": 3,
          "effect": "bis"
        },
        {
          "number": 4,
          "effect": "bis"
        },
        {
          "number": 6,
          "effect": "bis"
        },
        {
          "number": 7,
          "effect": "bis"
        },
        {
          "number": 8,
          "effect": "bis"
        },
        {
          "number": 9,
          "effect": "bis"
        },
        {
          "number": 10,
          "effect": "bis"
        },
        {
          "number": 12,
          "effect": "bis"
        },
        {
          "number": 13,
          "effect": "bis"
        },
        {
          "number": 2,
          "effect": "fence"
        },
        {
          "number": 3,
          "effect": "fence"
        },
        {
          "number": 5,
          "effect": "fence"
        },
        {
          "number": 5,
          "effect": "fence"
        },
        {
          "number": 6,
          "effect": "fence"
        },
        {
          "number": 6,
          "effect": "fence"
        },
        {
          "number": 7,
          "effect": "fence"
        },
        {
          "number": 8,
          "effect": "fence"
        },
        {
          "number": 8,
          "effect": "fence"
        },
        {
          "number": 9,
          "effect": "fence"
        },
        {
          "number": 10,
          "effect": "fence"
        },
        {
          "number": 10,
          "effect": "fence"
        },
        {
          "number": 11,
          "effect": "fence"
        },
        {
          "number": 11,
          "effect": "fence"
        },
        {
          "number": 13,
          "effect": "fence"
        },
        {
          "number": 14,
          "effect": "fence"
        },
        {
          "number": 15,
          "effect": "fence"
        },
        {
          "number": 1,
          "effect": "real_estate"
        },
        {
          "number": 2,
          "effect": "real_estate"
        },
        {
          "number": 4,
          "effect": "real_estate"
        },
        {
          "number": 12,
          "effect": "park"
        },
        {
          "number": 14,
          "effect": "park"
        },
        {
          "number": 15,
          "effect": "park"
        },
        {
          "number": 3,
          "effect": "pool"
        },
        {
          "number": 4,
          "effect": "pool"
        },
        {
          "number": 6,
          "effect": "pool"
        },
        {
          "number": 7,
          "effect": "pool"
        },
        {
          "number": 8,
          "effect": "pool"
        },
        {
          "number": 9,
          "effect": "pool"
        },
        {
          "number": 10,
          "effect": "pool"
        },
        {
          "number": 5,
          "effect": "real_estate"
        },
        {
          "number": 5,
          "effect": "real_estate"
        },
        {
          "number": 6,
          "effect": "real_estate"
        },
        {
          "number": 7,
          "effect": "real_estate"
        },
        {
          "number": 7,
          "effect": "real_estate"
        },
        {
          "number": 8,
          "effect": "real_estate"
        },
        {
          "number": 8,
          "effect": "real_estate"
        },
        {
          "number": 9,
          "effect": "real_estate"
        },
        {
          "number": 9,
          "effect": "real_estate"
        },
        {
          "number": 10,
          "effect": "real_estate"
        },
        {
          "number": 12,
          "effect": "pool"
        },
        {
          "number": 13,
          "effect": "pool"
        },
        {
          "number": 3,
          "effect": "temp_worker"
        },
        {
          "number": 4,
          "effect": "temp_worker"
        },
        {
          "number": 6,
          "effect": "temp_worker"
        },
        {
          "number": 7,
          "effect": "temp_worker"
        },
        {
          "number": 8,
          "effect": "temp_worker"
        },
        {
          "number": 9,
          "effect": "temp_worker"
        },
        {
          "number": 10,
          "effect": "temp_worker"
        },
        {
          "number": 12,
          "effect": "temp_worker"
        }
    ]

    this.suffleCards = function () {
        this.cards.sort(() => Math.random() - 0.5)
    }

    this.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    this.setObjectives = function () {
      this.gameObjectives.forEach((item, index) => {
        if(this.mode === 2){
          item.innerHTML = `<img src="imgs/objectives/${this.randomInt(1, 2)}.${this.randomInt(1, 10)}.jpg" alt="objective">`
        } else {
          item.innerHTML = `<img src="imgs/objectives/2.${this.randomInt(1, 18)}.jpg" alt="objective">`
        }
      })
    }

    this.setCards = function () {
        this.gameCards.forEach((item, index) => {
            item.innerHTML = `<img src="imgs/${this.cards[this.counter]['effect']}.jpg" alt="${this.cards[this.counter]['effect']}">`
            if(this.mode === 1){
              item.innerHTML += `<img src="imgs/${this.cards[this.counter]['number']}.jpg" alt="${this.cards[this.counter]['number']}">`
            } else {
              item.innerHTML += `<img src="imgs/${this.cards[this.counter + 1]['number']}.jpg" alt="${this.cards[this.counter + 1]['number']}">`
            }
            this.counter++
            if(!this.cards[this.counter + 1]){
              this.suffleCards()
              this.counter = 0
            }
        })
    }

    this.newGame = function () {
        this.suffleCards()
        this.setObjectives()
        this.setCards()
    }

    this.init = function () {
        this.btnNext.onclick = () => this.setCards()
        this.btnRepeat.onclick =  () => this.newGame()

        this.gameObjectives.forEach((item, index) => {
          item.addEventListener('click', (event) => {
            let src = item.querySelector('img').src

            if(src.slice(src.length - 9) === '.back.jpg') {
              item.querySelector('img').src = src.replace('.back.jpg', '.jpg')
            } else {
              item.querySelector('img').src = src.replace('.jpg', '.back.jpg')
            }
          })

        })

        document.addEventListener('keydown', (event) => {
          if (event.code == 'ArrowRight') this.setCards()
        });

        this.newGame()
    }
}

if(document.querySelector('.game')){
    let game = new Game
    game.init()
}

let offcanvas = new Offcanvas('.offcanvas')
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    offcanvas.open()
})
document.querySelector('.offcanvas .btn-close').addEventListener('click', function() {
    offcanvas.close()
})