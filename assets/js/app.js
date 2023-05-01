const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", async (e) => {
    e.preventDefault()

    await fetch("https://sheet.best/api/sheets/8e070747-73b0-41c9-a2c3-23bcc8ca3357", {
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "Nombre": formulario.name.value,
            "Email": formulario.email.value,
            "Asunto": formulario.subject.value,
            "Mensaje": formulario.message.value
        })
    })
})