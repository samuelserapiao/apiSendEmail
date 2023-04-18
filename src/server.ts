import { app } from "./app";
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"

app.listen(3333)

app.get("/terms", (request, response) => {
    return response.json({
        message: "Service terms",
    })
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))