try {
  window.addEventListener('DOMContentLoaded', (event) => {
    const numberInput = document.getElementById('number')
    const barcodeContainer = document.getElementById('barcode-container')
    const barcode = document.getElementById('barcode')
    const scaleInput = document.getElementById('barcode-scale')
    const scaleValue = document.getElementById('scale-value')

    var barcodeWidth, barcodeHeight
    
    numberInput.value = Cookies.get('lastNumberValue')

    numberInput.addEventListener('input', (event) => {
      Cookies.set('lastNumberValue', numberInput.value)
      
      if(numberInput.value == "") barcodeContainer.classList.add('hidden')
      
      JsBarcode('#barcode', numberInput.value, {
        format: "CODE128",
        lineColor: "#000",
        background: "lightyellow",
        width: 2,
        height: 75,
        displayValue: false,
      })

      barcodeWidth = barcode.width
      barcodeHeight = barcode.height
      
      barcodeContainer.classList.remove('hidden')
    })
    
    if(numberInput.value){
      const inputEvent = new Event('input')
      numberInput.dispatchEvent(inputEvent)
    }

    scaleInput.value = Cookies.get('lastScaleValue')

    scaleInput.addEventListener('input', (event) => {
      Cookies.set('lastScaleValue', scaleInput.value)
      
      scaleValue.innerHTML = `${scaleInput.value}%`

      barcode.style.width = `${barcodeWidth * (scaleInput.value / 100.0)}px`
      barcode.style.height = `${barcodeHeight * (scaleInput.value / 100.0)}px`
    })

    if(scaleInput.value){
      const inputEvent = new Event('input')
      scaleInput.dispatchEvent(inputEvent)
    }
  })
} catch (error) {
  console.log(error)
}