
    async function loadTemplate(id, file) {
    const result = await fetch(file);
    const html = await result.text();
    document.getElementById(id).innerHTML = html;
}


