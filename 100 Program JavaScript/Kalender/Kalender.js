const monthNumber = parseInt(prompt("Enter the month number (1 - 12): "));

if (monthNumber >= 1 && monthNumber <= 12) {
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(2025, monthNumber - 1, 1));
  console.log(`\nCalendar for ${monthName} 2025:\n`);

  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  console.log(days.join("  "));

  const totalDays = new Date(2025, monthNumber, 0).getDate();
  const firstDay = new Date(2025, monthNumber - 1, 1).getDay();

  let calendar = Array((firstDay === 0 ? 6 : firstDay - 1)).fill("  ");
  for (let i = 1; i <= totalDays; i++) {
    calendar.push(i.toString().padStart(2, " "));
  }

  for (let i = 0; i < calendar.length; i += 7) {
    console.log(calendar.slice(i, i + 7).join("  "));
  }
} else {
  console.log("Invalid month number!");
}