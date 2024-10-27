const temperatureSlider = document.getElementById('temperatureSlider');
const convertedValue = document.getElementById('convertedValue');

temperatureSlider.addEventListener('input', updateTemperature);

function updateTemperature() {
    const fahrenheit = temperatureSlider.value;
    console.log("==>>>",fahrenheit)
    const celsius = ((fahrenheit - 32) * 5) / 9;
    console.log("celsius==>>>",celsius)
    convertedValue.textContent = `${celsius.toFixed(1)}°C`;
}
