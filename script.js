const fontSizeHeader = document.querySelector("#font-size")
const viewportSizeHeader = document.querySelector("#viewport-size")
const viewport = window
const containerSizeHeader = document.querySelector("#container-size")
const container = document.querySelector(".content")
const breakpointName = document.querySelector("#name")

const resizeCallback = () => {
    const viewportWidth = window.getComputedStyle(document.body).width
    fontSizeHeader.textContent = `font-size ${
        window.getComputedStyle(fontSizeHeader).fontSize
    }`
    viewportSizeHeader.textContent = `viewport-size ${viewportWidth}`
    containerSizeHeader.textContent = `content-size ${
        window.getComputedStyle(container).width
    }`
    switch (true) {
        case viewportWidth.slice(0, -2) > 1440:
            breakpointName.innerHTML = "Desktop"
            break

        case viewportWidth.slice(0, -2) > 1024:
            breakpointName.innerHTML = "Small laptop"
            break

        case viewportWidth.slice(0, -2) > 768:
            breakpointName.innerHTML = "Tablet"
            break

        default:
            breakpointName.innerHTML = "Mobile"
            break
    }
}

resizeCallback()
window.addEventListener("resize", resizeCallback)