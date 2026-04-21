import "dotenv/config";
import { app } from "./app";
const port = process.env.PORT || process.env.SERVER_PORT || 6969;
app.listen(port, () => {
    console.log("runnig on ", port);
});
//# sourceMappingURL=index.js.map