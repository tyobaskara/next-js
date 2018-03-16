import Layout from '../lib/Layout'
import Link from 'next/link'

const Blog = (props) => (
  <li>
    <Link href={`/blog?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <Blog title="Hello Next.js"/>
      <Blog title="Learn Next.js is awesome"/>
      <Blog title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)