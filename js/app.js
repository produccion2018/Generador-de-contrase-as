function generarContraseñaMauro(longitud) {
    const caracteresMauro = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let contraseñaMauro = "";

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorioMauro = Math.floor(Math.random() * caracteresMauro.length);
        contraseñaMauro += caracteresMauro[indiceAleatorioMauro];
    }

    return contraseñaMauro;
}

document.getElementById("generarBtn").addEventListener("click", function() {
    const longitud = document.getElementById("longitud").value;
    const contraseña = generarContraseñaMauro(longitud);
    document.getElementById("contraseña").value = contraseña;
});