// This is a "Mock" response generator to simulate AI while we don't have the API key configured
// In a real scenario, this would call OpenAI/Anthropic
export async function POST(req: Request) {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // Simulating a delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const content = `[MODO DEMO] Hola! Soy Nelson Digital. Veo que me has preguntado sobre: "${lastMessage.content}". 
  
  Como aún estamos en fase de configuración, no puedo consultar mi base de datos en tiempo real (RAG), pero puedo decirte que mi creador tiene más de 10 años de experiencia uniendo Producto y Tecnología.
  
  ¡Pronto estaré conectado a un cerebro de verdad con OpenAI! 🧠`;

    // We manually stream the response to simulate the "typing" effect
    // In Vercel AI SDK 3.0+ we can use StreamData or just return text
    // For now, let's return a simple response. 
    // NOTE: To properly use useChat's stream reading on the client, we need to return a stream.

    const encoder = new TextEncoder();
    const customStream = new ReadableStream({
        async start(controller) {
            const chunks = content.split(" ");
            for (const chunk of chunks) {
                controller.enqueue(encoder.encode(chunk + " "));
                await new Promise(r => setTimeout(r, 50)); // Typing effect
            }
            controller.close();
        },
    });

    return new Response(customStream, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
