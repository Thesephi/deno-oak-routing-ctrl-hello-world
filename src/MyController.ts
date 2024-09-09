import { Controller, ControllerMethodArgs, Get } from "@dklab/oak-routing-ctrl";
import type { Context, RouteContext } from "@oak/oak";

@Controller("/")
export class MyController {
  @Get("/")
  hello() {
    return `hello, Deno user!`;
  }

  @Get("/say/:what")
  @ControllerMethodArgs("param")
  say({ what }) {
    return `Deno user says: ${what}`;
  }
}
