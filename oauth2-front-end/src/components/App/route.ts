import { getClubs } from "@api/football";

export async function getFootballClubs() {
    const data = await getClubs();
    return { data };
}
