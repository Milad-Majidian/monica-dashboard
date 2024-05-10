export async function completions({ message }: { message: string }) {
  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer sk-5f28d53f33894877b9a4841baa0bb043",
    },
    body: JSON.stringify({
      messages: [
        {
          content: message,
          role: "user",
        },
      ],
      model: "deepseek-coder",
      frequency_penalty: 0,
      max_tokens: 2048,
      presence_penalty: 0,
      stop: null,
      stream: true,
      temperature: 1,
      top_p: 1,
    }),
  });
  const data = response.body
  return data
}
