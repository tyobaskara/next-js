import Link from 'next/link';

const fontSize = {
    fontSize: 20,
    marginRight: 25
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={fontSize}>Home</a>
        </Link>
        <Link href="/blogs">
            <a style={fontSize}>Blogs</a>
        </Link>
        <Link href="/magz">
            <a style={fontSize}>Magz</a>
        </Link>
        <Link href="/async">
            <a style={fontSize}>Async</a>
        </Link>
    </div>
)

export default Header