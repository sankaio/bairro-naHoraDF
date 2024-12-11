/* cor selecionada */

var menuItem = document.querySelectorAll('.item-menu')
function selectlink() {
  menuItem.forEach((item) =>
    item.classList.remove('ativo')
  )
  this.classList.add('ativo')
}

menuItem.forEach((item) =>
  item.addEventListener('click', selectlink)
)

var botaoexp = document.querySelector('#botao-exp')
var menubb = document.querySelector('.menu-lateral')

botaoexp.addEventListener('click', function () {
  menubb.classList.toggle('expandir')
})

