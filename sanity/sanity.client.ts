import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "j287bej8",
  dataset: "production",
  apiVersion: "2023-09-08",
  useCdn: false,
};

const client = createClient(config);

export default client;
