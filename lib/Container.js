const Container = (props) => (
  <div className="container">
    {props.children}
    <style jsx>{`
        .container {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ddd;
        }
    `}</style>
  </div>
)

export default Container
