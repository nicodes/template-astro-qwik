import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Qwik Counter</h2>
      <p style={{ fontSize: "2rem" }}>{count.value}</p>
      <button onClick$={() => count.value--}>-</button>
      <button onClick$={() => count.value++}>+</button>
    </div>
  );
});
