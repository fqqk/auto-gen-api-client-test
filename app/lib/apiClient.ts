import { Configuration, DefaultApi } from "../../generated-api";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.production.com"
    : "http://127.0.0.1:4010";

const configuration = new Configuration({
  basePath: baseUrl,
});

const api = new DefaultApi(configuration);

export default api;
