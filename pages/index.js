import Layout from '../lib/Layout'
import Link from 'next/link';

const PostLink = (props) => (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <p>Hello Next.js</p>
                
                <Link href="/blogs">
                    <button>Go to Blogs Page</button>
                </Link>
            </Layout>
        )
    }
}