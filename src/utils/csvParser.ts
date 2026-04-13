import { Member } from '../types';

function parseCSVRow(row: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    if (char === '"') {
      if (inQuotes && row[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

export function parseCSV(csvText: string): Member[] {
  const lines = csvText.trim().split('\n');
  const members: Member[] = [];

  const firstRow = parseCSVRow(lines[0]);
  const hasHeader = isNaN(Number(firstRow[0])) && firstRow[0].toLowerCase() !== '';
  const startIndex = hasHeader ? 1 : 0;

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const row = parseCSVRow(line);
    if (row.length >= 3 && row[2]) {
      members.push({
        serial: row[0] || '',
        enrollmentNo: row[1] || '',
        name: row[2] || '',
        phone: row[3] || '',
        address: row[4] || '',
      });
    }
  }

  return members;
}
