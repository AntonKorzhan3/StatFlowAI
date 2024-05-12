import axios from "axios";

export const DestinyService = new (class {
  API_KEY = process.env.bungieApiKey;
  BASE_URL = "https://www.bungie.net/Platform";
  clientId = process.env.authID;
  clientSecret = process.env.authSecret;

  async exchangeAuthorizationCodeForToken(
    code: string
  ): Promise<{ access_token: string; membership_id: string }> {
    console.log("Auth code I need before", code);
    const url = `${this.BASE_URL}/app/oauth/token/`;
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${window.btoa(
        `${this.clientId}:${this.clientSecret}`
      )}`,
    };
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: `${window.location.origin}/mainPage`,
    });

    try {
      const response = await axios.post(url, body, { headers });
      console.log("POST Response I want", response);
      const responseData = response.data;
      const { access_token, membership_id } = responseData;
      return { access_token, membership_id };
    } catch (error) {
      // Handle error
      throw new Error("Failed to exchange authorization code for token");
    }
  }

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

  // async getCurrentAccountID(
  //   memberShipId: String,
  //   membershipType: String
  // ): Promise<any> {
  //   const url = `${this.BASE_URL}/User/GetMembershipsById/${memberShipId}/${membershipType}/`;
  //   const headers = { "X-API-Key": this.API_KEY };
  //   const response = await axios.get(url, { headers });
  //   const data = await response.data;
  //   if (response.status !== 200) {
  //     // Throw error
  //   }

  //   const memID = data.Response.destinyMemberships.membershipId;
  //   return memID;
  // }

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
