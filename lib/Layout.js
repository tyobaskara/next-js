import Header from '../components/Header'
import Container from '../lib/Container'

const Layout = (props) => (
  <div>
    <Container>
      <Header />
      {props.children}
    </Container>
    
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -moz-box-sizing: border-box;
      }
      h1,h2,h3,p,a {
        line-height: 1.5;
      }
      ul {
        margin-left: 20px;
      }
    `}</style>
  </div>
)

export default Layout