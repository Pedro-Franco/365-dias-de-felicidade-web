function handleMyHappiness() {

  var myHappiness1 = document.getElementById('myHappiness1')
  var myHappiness2 = document.getElementById('myHappiness2')
  var myHappiness3 = document.getElementById('myHappiness3')

  localStorage.setItem('myhappiness1', myHappiness1.value)
  localStorage.setItem('myhappiness2', myHappiness2.value)
  localStorage.setItem('myhappiness3', myHappiness3.value)

  console.log(myHappiness1.value)

  var dadosSalvos1 = document.getElementById('dados-salvos1')
  var dadosSalvos2 = document.getElementById('dados-salvos2')
  var dadosSalvos3 = document.getElementById('dados-salvos3')

  dadosSalvos1.innerHTML = `${myHappiness1.value}`
  dadosSalvos2.innerHTML = `${myHappiness2.value}`
  dadosSalvos3.innerHTML = `${myHappiness3.value}`

}