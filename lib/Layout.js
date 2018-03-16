import Header from '../components/Header'
import Container from '../lib/Container'

import maincss from '../styles/main.scss'

const Layout = (props) => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: maincss }} />
    <Container>
      <Header />
      {props.children}
    </Container>
  </div>
)

export default Layout