export async function login(payload) {
    const loaderElement = document.getElementById("root");
    loaderElement.classList.add("loader");
    try {
        const url = 'https://dummyjson.com/auth/login';
        const dataSetup = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
        let response = await fetch(url, dataSetup);
        response = await response.json();
        loaderElement.classList.remove("loader");
        return response

    } catch (err) {
        loaderElement.classList.remove("loader");
    }
}