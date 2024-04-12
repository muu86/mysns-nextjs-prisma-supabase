import { PrismaClient } from '@prisma/client';
import { parse } from 'csv';
import { promises as fs } from 'fs';
const prisma = new PrismaClient({
  log: ['query'],
});

async function main() {
  const content = await fs.readFile('../data/seoul_emd_geometry.csv');
  const parser = parse(content, {
    delimiter: '|',
  });

  // |code|c1|c2|c3|c4|order|created_at|deleted_at|prev_code|eng_name|name|geometry|geo_g|p_center|g_center
  parser.on('readable', async () => {
    let record = parser.read();
    while ((record = parser.read()) !== null) {
      const c1 = record[2];
      const c2 = record[3];
      const c3 = record[4];
      const c4 = record[5];

      const result: number = await prisma.$executeRawUnsafe(`
        INSERT INTO address (code, c1, c2, c3, c4, created_at, updated_at, geo_p, geo_s, center_p, center_s)
        VALUES ('${record[1]}', '${c1}', '${c2}', '${c3}', '${c4}', now(), now(),
        st_geomfromewkt('${record[12]}'), st_geomfromewkt('${record[13]}'), st_centroid(st_geomfromewkt('${record[12]}')), st_centroid(st_geogfromtext('${record[13]}'), true)::geometry)
        `);
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
