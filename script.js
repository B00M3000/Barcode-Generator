try {
  window.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('number')
    const barcodeContainer = document.getElementById('barcode-container')
    const barcode = document.getElementById('barcode')
    
    input.value = Cookies.get('lastValue')

    input.addEventListener('input', (event) => {
      Cookies.set('lastValue', input.value)
      
      if(input.value == "") barcodeContainer.classList.add('hidden')
      
      JsBarcode('#barcode', input.value, {
        format: "CODE128",
        lineColor: "#000",
        width: 3,
        height: 75,
        displayValue: false
      })
      
      barcodeContainer.classList.remove('hidden')
    })
    
    const inputEvent = new Event('input')
    input.dispatchEvent(inputEvent)
  })
} catch (error) {
  console.log(error)
}