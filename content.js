const blocked = ['/home', '/explore']

function clearcrap() {
    setTimeout(clearcrap, 250)
    if (!(window.location.pathname.endsWith('/home') || window.location.pathname.endsWith('/explore'))) return
    document.querySelectorAll('article, [role="region"], [role="complementary"], [role="status"]').forEach(el => el.style.visibility = 'hidden')
}
clearcrap()
