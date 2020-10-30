
import Link from 'next/link'

const FootSpace = () => {
  return (
    <>
      <footer className="shadow">
        <h2>Get at me.</h2>
        <Link href="/contact"><a>I'm here.</a></Link>
      </footer>
      <style jsx>{`
          footer {
            position: fixed;
            top: 200px;
            height:285px;
            width:300px;
            margin: 12px;
            padding: 24px; 
            border: none; border-radius: 24px; box-shadow: 7px 10px 20px 1px rgba(204, 189, 177, 0.48); 
          }
          h2{
            font-size: 2.4em;

          }
      `}</style>
    </>
  )
}

export default FootSpace;