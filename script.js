document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton')
    generateButton.addEventListener('click', generateNumber)
})

const generateNumber = () => {
    const minElement = document.getElementById('minInput')
    const maxElement = document.getElementById('maxInput')
    const minValue = parseInt(minElement?.value)
    const maxValue = parseInt(maxElement?.value)

    const errorElement = document.getElementById('error')
    const resultElement = document.getElementById('result')
    const resultElementEquals = document.getElementById('resultEquals')
    const generateButton = document.getElementById('generateButton')

    const pointOne = document.getElementById('point1')
    const pointTwo = document.getElementById('point2')
    const pointThree = document.getElementById('point3')

    const loaderContainer = document.getElementById('loaderContainer')

    if (
        isNaN(minValue) ||
        minValue > 999999999999999 ||
        minValue < -999999999999999
    ) {
        errorElement.hidden = false
        resultElement.hidden = true
        loaderContainer.hidden = true
        return
    }
    if (
        isNaN(maxValue) ||
        maxValue > 999999999999999 ||
        maxValue < -999999999999999
    ) {
        errorElement.hidden = false
        resultElement.hidden = true
        loaderContainer.hidden = true
        return
    }

    const min = minValue < maxValue ? minValue : maxValue
    const max = min === minValue ? maxValue : minValue

    if (!isNaN(min) && !isNaN(max)) {
        loaderContainer.hidden = false
        setTimeout(() => handleCalculation(), 1125)
        handleHidden()
        handleDisabled()
        handleAnimation()
        setTimeout(() => handleEnabled(), 1125)
    }

    function handleCalculation() {
        const result = Math.floor(Math.random() * (max - min + 1)) + min
        resultElementEquals.innerHTML = result
    }

    function handleHidden() {
        errorElement.hidden = true
        resultElement.hidden = false
    }

    function handleDisabled() {
        generateButton.setAttribute('disabled', 'true')
        maxElement.setAttribute('disabled', 'true')
        minElement.setAttribute('disabled', 'true')
        resultElement.style.cursor = 'not-allowed'
        resultElement.style.backgroundColor = '#c8c8c8'
        resultElement.style.opacity = '0.75'
        resultElement.style.border = '1px solid #4b4b4b'
    }

    function handleEnabled() {
        generateButton.removeAttribute('disabled')
        maxElement.removeAttribute('disabled')
        minElement.removeAttribute('disabled')
        resultElement.style.cursor = 'default'
        resultElement.style.backgroundColor = '#e7f0dc'
        resultElement.style.opacity = '1'
        resultElement.style.border = 'none'
    }

    function handleAnimation() {
        pointOne.style.visibility = 'visible'
        setTimeout(() => (pointTwo.style.visibility = 'visible'), 125)
        setTimeout(() => (pointThree.style.visibility = 'visible'), 250)
        setTimeout(() => (pointOne.style.visibility = 'hidden'), 375)
        setTimeout(() => (pointTwo.style.visibility = 'hidden'), 500)
        setTimeout(() => (pointThree.style.visibility = 'hidden'), 625)
        setTimeout(() => (pointOne.style.visibility = 'visible'), 750)
        setTimeout(() => (pointTwo.style.visibility = 'visible'), 875)
        setTimeout(() => (pointThree.style.visibility = 'visible'), 1000)
        setTimeout(() => (pointOne.style.visibility = 'hidden'), 1125)
        setTimeout(() => (pointTwo.style.visibility = 'hidden'), 1125)
        setTimeout(() => (pointThree.style.visibility = 'hidden'), 1125)
    }
}
