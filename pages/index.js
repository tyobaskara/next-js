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
                <h1>Hello Next.js</h1>

                <img src="../static/Tio.jpg" alt="tyobaskara"/>
                
                <div>
                    <Link href="/blogs">
                        <button>Go to Blogs Page</button>
                    </Link>
                </div>
            </Layout>
        )
    }
}