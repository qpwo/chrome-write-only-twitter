function redirectToCompose() {
    setTimeout(redirectToCompose, 1000)
    if (window.location.pathname !== '/compose/post') {
        window.location.href = 'https://x.com/compose/post'
        return
    }
}
function addModalBackground() {
    const modal = document.querySelector('[aria-modal="true"]')
    if (!modal) {
        setTimeout(addModalBackground, 100) // check often before loaded
        return
    }
    setTimeout(addModalBackground, 1000) // check less often after loaded

    let bg = document.getElementById('mycoolbg')
    if (!bg) {
        bg = document.createElement('div')
        bg.id = 'mycoolbg'
    }

    // Create a new div for the background if it doesn't exist
    // Insert the background just before the modal in the DOM
    modal.parentNode.insertBefore(bg, modal)

    // Style the background
    bg.style.position = 'fixed'
    bg.style.top = '0'
    bg.style.left = '0'
    bg.style.width = '100%'
    bg.style.height = '100%'
    bg.style.backgroundColor = '#222'
    bg.style.zIndex = '9998' // Make sure it's below the modal
    modal.style.position = 'relative'
    modal.style.zIndex = '9999'
}



redirectToCompose()
addModalBackground()
