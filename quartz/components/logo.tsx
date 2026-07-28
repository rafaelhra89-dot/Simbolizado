import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Logo: QuartzComponent = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <a href="/">
        <img
          src="/static/logo.png"
          alt="Simbolizado"
          style={{
            width: "180px",
            height: "auto",
          }}
        />
      </a>
    </div>
  )
}

export default (() => Logo) satisfies QuartzComponentConstructor