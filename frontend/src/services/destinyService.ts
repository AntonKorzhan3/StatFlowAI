import axios from "axios";

export const DestinyService = new (class {
  API_KEY = process.env.bungieApiKey;
  BASE_URL = "https://www.bungie.net/Platform";
  clientId = process.env.authID;
  clientSecret = process.env.authSecret;

  async getCurrentBungieNetUser(accessToken: string): Promise<any> {
    const url = `${this.BASE_URL}/User/GetCurrentBungieNetUser/`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "X-API-Key": this.API_KEY,
    };
    try {
      const response = await axios.get(url, { headers });
      const userData = response.data;

      if (response.status !== 200) {
        // Handle error
      }

      return userData;
    } catch (error) {
      // Handle error
      throw new Error("Failed to get current BungieNet user");
    }
  }

  async getCurrentAccountID(
    memID: String,
    membershipType: String
  ): Promise<any> {
    const url = `${this.BASE_URL}/User/GetMembershipsById/${memID}/${membershipType}/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;
    if (response.status !== 200) {
      // Throw error
    }

    const memberShipID = data.Response.destinyMemberships.membershipId;
    return memberShipID;
  }

  async getAccountStats(
    membershipType: String,
    membershipId: String
  ): Promise<any> {
    const url = `${this.BASE_URL}/Destiny2/${membershipType}/Account/${membershipId}/Stats/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    return data;
  }

  async getAccountName(
    membershipType: String,
    membershipId: String
  ): Promise<String> {
    const url = `${this.BASE_URL}/Destiny2/${membershipType}/Profile/${membershipId}/LinkedProfiles/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;

    if (response.status !== 200) {
      // Throw error
    }

    const accountName = data.Response.bnetMembership.displayName;
    return accountName;
  }
})();
