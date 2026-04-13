import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

async function extract() {
  const workbook = new ExcelJS.Workbook();
  const filePath = path.join(process.cwd(), 'src', 'MHAA_Voters_List.xlsx');
  await workbook.xlsx.readFile(filePath);
  
  const sheet = workbook.worksheets[0];
  console.log(`Sheet name: ${sheet.name}`);
  console.log(`RowCount: ${sheet.rowCount}`);
  
  const firstRow = sheet.getRow(1).values;
  const secondRow = sheet.getRow(2).values;
  console.log(`Header: ${JSON.stringify(firstRow)}`);
  console.log(`Row 2: ${JSON.stringify(secondRow)}`);
  
  const images = sheet.getImages();
  console.log(`Images count: ${images.length}`);
  if (images.length > 0) {
    console.log(`First image details:`, JSON.stringify(images[0].range));
  }
}

extract().catch(console.error);
