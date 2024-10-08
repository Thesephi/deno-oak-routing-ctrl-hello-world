import { Controller, ControllerMethodArgs, Get } from "@dklab/oak-routing-ctrl";

@Controller("/")
export class MyController {
  @Get("/")
  hello() {
    console.log(`request received at ${performance.now()}`);
    return `hello, Deno user!`;
  }

  @Get("/say/:what")
  @ControllerMethodArgs("param")
  say({ what }) {
    return `Deno user says: ${what}`;
  }
}
