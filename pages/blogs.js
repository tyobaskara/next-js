import Layout from '../lib/Layout'
import Link from 'next/link'
import Markdown from 'react-markdown'

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
    <div className="markdown">
     <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}/>
   </div>
    <ul>
      <Blog title="Hello Next.js"/>
      <Blog title="Learn Next.js is awesome"/>
      <Blog title="Deploy apps with Zeit"/>
    </ul>
    
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
  `}</style>
  </Layout>
)