export const getMethod = async (apiUrl) => {
    try {
        let userData = await fetch(apiUrl);
        userData = await userData.json();
        return userData
    } catch (err) {
    }
}