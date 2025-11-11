import oracledb from "oracledb";
import path from "path";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export async function getConnection() {
  try {
    const walletPath = path.resolve(process.env.DB_WALLET_PATH || "./wallet/Wallet_Serralheria");

    const connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT, // agora é o descriptor completo
      configDir: walletPath,
      walletLocation: walletPath,
    });

    return connection;
  } catch (error) {
    console.error("❌ Erro ao conectar ao Oracle Autonomous Database:", error);
    throw error;
  }
}
