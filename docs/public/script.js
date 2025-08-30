document.getElementById("submit").addEventListener("click", async () => {
    const keyword = document.getElementById("keyword").value;
    document.getElementById("search").innerText = "Searching the keyword " + keyword;

    const response = await fetch("/" + keyword);
    //const html = await response.text();
})

