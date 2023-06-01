const SwaggerUi = require("swagger-ui-express");
const swaggerdoc = require("swagger-jsdoc");
const { Router } = require("express");
// router create
const router = Router();
// swagger-doc
const swaggerDoc = swaggerdoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    servers: [
      {
        url: `http://localhost:5000`,
        title: "Online news website",
        description:
          "In this online news site, you can follow all the news in the world",
      },
    ],
    info: {
      title: "Online news website",
      description:
        "In this online news site, you can follow all the news in the world",
    },
    components: {
      securitySchemes: {
        Bearer: {
          type: "apiKey",
          in: "header",
          name: "token",
        },
      },
    },
  },
  apis: [
    `${process.cwd()}/src/swagger/components/*.yaml`,
    `${process.cwd()}/src/swagger/docs/*.yaml`,
  ],
});

router.use("/", SwaggerUi.serve, SwaggerUi.setup(swaggerDoc));

module.exports = router;
