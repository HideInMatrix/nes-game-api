"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: 'https://game.micromatrix.org',
        credentials: true,
    });
    const port = process.env.PORT || 7000;
    app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map