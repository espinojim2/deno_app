import { Application, Router  } from "https://deno.land/x/oak/mod.ts";



const messages = [];


const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Chat Server!";
  })
  .get("/messages", (context) => {
    context.response.body =messages;
  })
  .get("/jse", (context) => {
    context.response.body ="JSE";
  })
  .post("/messages", async(context) => {
    const  message= await context.request.body().value;   
      message.push(message);
    
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

addEventListener("fetch", app.fetchEventHandler());