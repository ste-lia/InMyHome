
// aflam aria cercului
const PI = 3.1415

function ariecerc(raza) {
    return raza ** 2  *PI
}
function diametruCerc(raza) {
    return 2 * raza *PI
}


// 4) Module Scope
// module cu functionalitati

export default {PI, ariecerc, diametruCerc}
