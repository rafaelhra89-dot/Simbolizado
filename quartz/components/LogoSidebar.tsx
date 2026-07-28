import { QuartzComponent, QuartzComponentConstructor } from "./types"

const LogoSidebar: QuartzComponent = () => {
  return (
    <div class="sidebar-logo">
      <a href="/">
        <img src="/static/logo.png" alt="Simbolizado" />
      </a>
    </div>
  )
}

LogoSidebar.css = `
.sidebar-logo{
  text-align:center;
  margin-bottom:1.5rem;
}

.sidebar-logo img{
  width:170px;
  max-width:100%;
  height:auto;
}
`

export default (() => LogoSidebar) satisfies QuartzComponentConstructor