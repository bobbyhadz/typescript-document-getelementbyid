const input = document.getElementById(
  'message',
) as HTMLInputElement | null;

if (input != null) {
  console.log(input.value); // 👉️ "Initial Value"
}