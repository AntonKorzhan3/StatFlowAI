import axios from "axios";

export const DestinyService = new (class {
  API_KEY = process.env.bungieApiKey;
  BASE_URL = "https://www.bungie.net/Platform";
  clientId = process.env.authID;
  clientSecret = process.env.authSecret;

  async getCurrentAccountID(
    memID: String,
    membershipType: String
  ): Promise<any> {
    const url = `${this.BASE_URL}/User/GetMembershipsById/${memID}/${membershipType}/`;
    const headers = { "X-API-Key": this.API_KEY };
    const response = await axios.get(url, { headers });
    const data = await response.data;
    if (response.status !== 200) {
      throw new Error("No destiny membership found");
    }

    const destinyMemberships = data.Response.destinyMemberships;

    // Check if destinyMemberships is an array and not empty
    if (Array.isArray(destinyMemberships) && destinyMemberships.length > 0) {
      // Access the first membership object in the array
      const membership = destinyMemberships[0];

      // Extract membershipId from the membership object
      const membershipID = membership.membershipId;

      return membershipID;
    } else {
      throw new Error("No destiny memberships found");
    }
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
      throw new Error("No destiny stats found");
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
      throw new Error("No destiny name found");
    }

    const accountName = data.Response.bnetMembership.displayName;
    return accountName;
  }
})();
