const blocked = ['/home', '/explore']


function findMostSpecificWithText(queryText) {
    var el = document.body
    while (true) {
        var found = false
        for (var child of [...el.children]) {
            if (child?.innerText?.includes(queryText)) {
                el = child
                found = true
                break
            }
        }
        if (!found) break
    }
    return el
}

function findBorderParent(el) {
    while (window.getComputedStyle(el).borderRadius === '0px' && el.parentElement != null && el != el.parentElement) {
        el = el.parentElement
    }
    return el
}
function removeSection(queryText) {
    var el = findMostSpecificWithText(queryText)
    if (el == null || el.style.visibility === 'hidden' || el == document.body) return
    el = findBorderParent(el)
    if (el == null || el.style.visibility === 'hidden' || el == document.body) return
    el.style.visibility = 'hidden'
}

function clearcrap() {
    setTimeout(clearcrap, 250)
    // removeSection('What’s happening')
    removeSection('Live on X')
    if (!(window.location.pathname.endsWith('/home') || window.location.pathname.endsWith('/explore')|| window.location.pathname.endsWith('/compose/post'))) return
    document.querySelectorAll('article, [role="region"], [role="complementary"], [role="status"]').forEach(el => el.style.visibility = 'hidden')
}
clearcrap()
