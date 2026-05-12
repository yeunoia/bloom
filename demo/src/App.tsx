import { Smear } from "@yeunoia/smear"

const c = {
  bg: "#0d0d0d",
  surface: "#141414",
  border: "#1e1e1e",
  text: "#d0d0d0",
  muted: "#555",
}

const CodeBlock = ({ children }: { children: string }) => (
  <pre
    style={{
      fontFamily: "monospace",
      fontSize: 13,
      color: "#aaa",
      background: c.surface,
      border: `1px solid ${c.border}`,
      borderRadius: 8,
      padding: "16px 20px",
      overflowX: "auto",
      lineHeight: 1.7,
      margin: 0,
    }}
  >
    {children}
  </pre>
)

const names = ["rainbow", "cloud", "dusk", "mist", "ember"]
const blobColors = ["#2a1a3a", "#1a2535", "#3a1a2a", "#1a2a2a", "#3a1a1a"]
//                   rainbow    cloud     dusk       mist       ember

export default function App() {
  return (
    <main
      style={{
        background: c.bg,
        minHeight: "100vh",
        color: c.text,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{ maxWidth: 600, margin: "0 auto", padding: "80px 24px 120px" }}
      >
        {/* hero */}
        <section style={{ marginBottom: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <h1
              style={{
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#eee",
                margin: 0,
              }}
            >
              @yeunoia/smear
            </h1>
          </div>
          <p
            style={{
              fontSize: 15,
              color: c.muted,
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            Wrap{" "}
            <Smear
              backgroundColor="#1a3a2a"
              paddingX={8}
              paddingY={3}
              color="#ccc"
            >
              anything
            </Smear>{" "}
            with smear
          </p>
          <CodeBlock>{"npm install @yeunoia/smear"}</CodeBlock>
        </section>

        <section>
          <div
            style={{
              background: c.surface,
              border: `1px solid ${c.border}`,
              borderRadius: 12,
              padding: 32,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {names.map((name, i) => (
              <Smear
                key={name}
                backgroundColor={blobColors[i]}
                paddingX={10}
                paddingY={5}
              >
                <span
                  style={{
                    fontSize: 13,
                    color: "#aaa",
                    fontFamily: "monospace",
                  }}
                >
                  {name}
                </span>
              </Smear>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
