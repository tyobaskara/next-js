import Header from '../components/Header'
import Container from '../lib/Container'

import maincss from '../styles/main.scss'

const Layout = (props) => (
  <div>
    <Container>
      <Header />
      {props.children}
    </Container>
    
    <style dangerouslySetInnerHTML={{ __html: maincss }} />
  </div>
)

export default Layout