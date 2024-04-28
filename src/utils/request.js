async function fetchProperties() {
    try {
        const res = await fetch('http://localhost:3000/api/properties')

        if (!res.ok) {
            throw new Error("hata oluştu properties");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}
async function fetchProperty(id) {
    try {
        const res = await fetch(`http://localhost:3000/api/properties/${id}`)

        if (!res.ok) {
            throw new Error("hata oluştu properties");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export { fetchProperties, fetchProperty };
