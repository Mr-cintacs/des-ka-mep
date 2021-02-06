let landElements = document.querySelectorAll(".land");

for(landElement of landElements) {
    landElement.addEventListener('mouseover', showHoverDiv);
    landElement.addEventListener('mouseout', hideHoverDiv);
}

function showHoverDiv(event) {
    let infoDiv = document.createElement("div");
    console.log(infoDiv);
    infoDiv.className = "popUp";
    infoDiv.textContent += event.target.getAttribute('title');
    let mousePosition = {
        X : event.clientX,
        Y : event.clientY
    }
    infoDiv.style.left = mousePosition.X + 'px';
    infoDiv.style.top = mousePosition.Y + 'px';
    document.body.appendChild(infoDiv);
}

function hideHoverDiv(event) {
    let infoDivsToRemove = document.querySelectorAll('.popUp');
    for( infoDivToRemove of infoDivsToRemove) {
        document.body.removeChild(infoDivToRemove);
    }

}
