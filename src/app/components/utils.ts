export function convertToGermanDateFormat(isoDateString: string): string {
  // Parse the ISO date string
  const date = new Date(isoDateString);

  // Format the date
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns 0-11
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
