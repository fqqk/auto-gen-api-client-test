import { Configuration, DefaultApi } from "../../generated-api";

const configuration = new Configuration({
  basePath: "http://localhost:8080",
});

const api = new DefaultApi(configuration);

export default api;
