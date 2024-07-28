const search = document.getElementById("search");

search.addEventListener("keydown", async function (e) {
    if (e.key == "Enter" && window.chemicalLoaded && e.target.value) {
        window.location = await window.chemicalEncode(e.target.value)
    }
})