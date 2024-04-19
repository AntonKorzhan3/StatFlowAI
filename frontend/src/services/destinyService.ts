import axios from "axios";

export const DestinyService = new (class {
  API_KEY = "d2e04d63d8f44b48a4fd69ff347577aa";
  BASE_URL = "https://www.bungie.net/Platform";

  async getAccountStats(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const activitiesWon =
      data.Response.mergedAllCharacters.results.allPvP.allTime.activitiesWon
        .basic.displayValue;
    
    const killsPVP = data.Response.mergedAllCharacters.results.allPvP.allTime.kills.basic.value;
    return activitiesWon;
  }

  async getPvpKills(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const killsPVP = 
      data.Response.mergedAllCharacters.results.allPvP.allTime.kills
        .basic.displayValue;
    return killsPVP;
  }

  async getAssists(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const assists = 
      data.Response.mergedAllCharacters.results.allPvP.allTime.assists
        .basic.displayValue;
    return assists;
  }

  async getAccountName(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Profile/4611686018452357594/LinkedProfiles/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const accountName = 
      data.Response.bnetMembership.displayName;
    return accountName;
  }

  async getActivitiesCleared(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const activitiesCleared = 
      data.Response.mergedAllCharacters.results.allPvE.allTime.activitiesCleared
        .basic.displayValue;
    return activitiesCleared;
  }

  async getPveKills(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const pveKills = 
      data.Response.mergedAllCharacters.results.allPvE.allTime.kills
        .basic.displayValue;
    return pveKills;
  }

  async getPveDeaths(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const pveDeaths = 
      data.Response.mergedAllCharacters.results.allPvE.allTime.deaths
        .basic.displayValue;
    return pveDeaths;
  }

  async getKD(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const KdRatio = 
      data.Response.mergedAllCharacters.results.allPvP.allTime.killsDeathsRatio
        .basic.displayValue;
    return KdRatio;
  }

  async getAllTimeKills(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const allTimeKills = 
      data.Response.mergedAllCharacters.merged.allTime.kills
        .basic.displayValue;
    return allTimeKills;
  }

  async getHighestLight(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/1/Account/4611686018452357594/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const highestLight = 
      data.Response.mergedAllCharacters.merged.allTime.highestLightLevel
        .basic.displayValue;
    return highestLight;
  }
})();
