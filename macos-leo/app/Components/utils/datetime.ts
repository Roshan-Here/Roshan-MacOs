export function formatDate(date: Date): string {

  // Get individual components of the date
  const weekday = date.toLocaleString("en-US", { weekday: "short" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const hour = date.getHours() % 12 || 12; // Convert hour to 12-hour format
  const minute = date.getMinutes().toString().padStart(2, "0"); // Ensure two-digit minutes
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  // Combine the components without commas
  return `${weekday} ${month} ${day} ${hour}:${minute} ${ampm}`;
}
