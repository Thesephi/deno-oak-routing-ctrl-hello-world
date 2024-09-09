import { Application } from "@oak/oak";
import { useOakServer } from "@dklab/oak-routing-ctrl";
import { MyController } from "./MyController.ts";
import boxen from "npm:boxen@8.0.1";

const port = 1993;
const app = new Application();
useOakServer(app, [MyController]);
app.addEventListener("listen", () => {
  console.log(`server started on port ${port}`);
  console.log(
    boxen(`try making a request e.g.\ncurl http://localhost:${port}`),
  );
});
app.listen({ port });
