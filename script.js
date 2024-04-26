document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton')
    generateButton.addEventListener('click', generateNumber)
})

const generateNumber = () => {
    const minElement = parseInt(document.getElementById('minInput')?.value)
    const maxElement = parseInt(document.getElementById('maxInput')?.value)
    const errorElement = document.getElementById('error')
    const resultElement = document.getElementById('result')
    const resultElementEquals = document.getElementById('resultEquals')

    if (
        isNaN(minElement) ||
        minElement > 999999999999999 ||
        minElement < -999999999999999
    ) {
        errorElement.style.visibility = 'visible'
        resultElement.style.visibility = 'hidden'
        return
    }
    if (
        isNaN(maxElement) ||
        maxElement > 999999999999999 ||
        maxElement < -999999999999999
    ) {
        errorElement.style.visibility = 'visible'
        resultElement.style.visibility = 'hidden'
        return
    }

    const min = minElement < maxElement ? minElement : maxElement
    const max = min === minElement ? maxElement : minElement

    if (!isNaN(min) && !isNaN(max)) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min
        errorElement.style.visibility = 'hidden'
        resultElement.style.visibility = 'visible'
        resultElementEquals.innerHTML = result
    }
}
