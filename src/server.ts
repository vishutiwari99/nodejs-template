import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";
const startServer = () => {
  const PORT = Config.PORT;
  try {
    // eslint-disable-next-line no-console
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
  } catch (error) {
    // eslint-disable-next-line no-console
    logger.error(error);
  }
};
startServer();
