const OpenApiMocker = await import('../lib/open-api-mocker.js');

const mocker = new OpenApiMocker.default({ schema: "./inner-project/openapi.yaml", port: 8080 });
await mocker.validate();
await mocker.mock();