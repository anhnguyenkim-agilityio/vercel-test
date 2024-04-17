export default class ApiService {
  constructor(baseURL, endPoint) {
    this.baseURL = baseURL;
    this.endPoint = endPoint;
  }

  async get() {
    try {
      const res = await fetch(`${this.baseURL}/${this.endPoint}`, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (error) {
      throw new Error(`Get data fail ${error.message}`);
    }
  }

  async post(data) {
    try {
      const res = await fetch(`${this.baseURL}/${this.endPoint}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        return res.json();
      }
    } catch (error) {
      throw new Error(`Post data fail ${error.message}`);
    }
  }

  async put(payload, data) {
    try {
      console.log(payload);
      const res = await fetch(
        `${this.baseURL}/${this.endPoint}/${payload.id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        return res.json();
      }
    } catch (error) {
      throw new Error(`Put data fail ${error.message}`);
    }
  }

  async delete(payload) {
    try {
      const res = await fetch(`${this.baseURL}/${this.endPoint}/${payload}`, {
        method: "DELETE",
      });
      if (res.ok) {
        return res.json();
      }
    } catch (error) {
      throw new Error(`Delete data fail ${error.message}`);
    }
  }
}
