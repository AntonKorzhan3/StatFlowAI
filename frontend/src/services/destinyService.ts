import axios from "axios";

export const DestinyService = new (class {
  API_KEY = "d2e04d63d8f44b48a4fd69ff347577aa";
  BASE_URL = "https://www.bungie.net/Platform";

  async getAccountStats(
    membershipType: String,
    membershipId: String
  ): Promise<Number> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const accountStats =
      data.Response.mergedAllCharacters.results.allPvP.allTime.activitiesWon
        .basic.value;
    console.log("hello");
    return accountStats;
  }
})();
