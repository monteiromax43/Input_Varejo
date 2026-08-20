import {ensureSchema} from "../../../lib/db";

export const runtime="nodejs";

export async function GET(){
  const databaseConfigured=Boolean(process.env.DATABASE_URL||process.env.POSTGRES_URL||process.env.POSTGRES_URL_NON_POOLING);
  const syncConfigured=Boolean(process.env.SYNC_SECRET);
  if(!databaseConfigured)return Response.json({ok:false,databaseConfigured,syncConfigured,stage:"environment"},{status:503});
  try{
    const sql=await ensureSchema();
    await sql`SELECT 1`;
    return Response.json({ok:true,databaseConfigured,syncConfigured,stage:"ready"});
  }catch(error){
    console.error("Falha no diagnóstico do banco:",error);
    return Response.json({ok:false,databaseConfigured,syncConfigured,stage:"database"},{status:503});
  }
}
