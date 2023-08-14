const SNIPE_IT_URL = Deno.env.get("SNIPE_IT_URL")
const SNIPE_IT_TOKEN = Deno.env.get("SNIPE_IT_TOKEN")

const options:RequestInit = {
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${SNIPE_IT_TOKEN}`
    }
}


export async function searchAssetByName(name:string) {
    const limit = 5;
    const data = await request(`/hardware?limit=${limit}&sort=name&search=${name}`)
    return data;

}


async function request(apiEndPoint:string) {
    console.log(`${SNIPE_IT_URL}/api/v1/${apiEndPoint}`)
    const data = await fetch(`${SNIPE_IT_URL}/api/v1${apiEndPoint}`, options).then(b=>b.json())
    return data;
}