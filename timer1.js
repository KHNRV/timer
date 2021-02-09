const argv = process.argv.slice(2);

for (const element of argv) {
  if (isNaN(Number(element)) || Number(element) < 0) {
    continue;
  }
  setTimeout(() => {
    console.log("🔔");
  }, Number(element) * 1000);
}
