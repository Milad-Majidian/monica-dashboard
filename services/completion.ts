async function completions() {
  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer sk-2d53901174d149c98708715c9904dfb6",
    },
    body: JSON.stringify({
      messages: [
        {
          content: "Generate 1 to 1000 random number using  python code",
          role: "system",
        },
        { content: "Hi", role: "user" },
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
  const data = await response.json();
  return data;
}

// fetch("https://api.deepseek.com/v1/chat/completions", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: "Bearer sk-2d53901174d149c98708715c9904dfb6",
//   },
//   body: JSON.stringify({
//     messages: [
//       { content: "You are a helpful assistant", role: "system" },
//       { content: "Hi", role: "user" },
//     ],
//     model: "deepseek-coder",
//     frequency_penalty: 0,
//     max_tokens: 2048,
//     presence_penalty: 0,
//     stop: null,
//     stream: true,
//     temperature: 1,
//     top_p: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle the response data here
//     console.log(data);
//   })
//   .catch((error) => {
//     // Handle any errors here
//     console.error(error);
//   });
