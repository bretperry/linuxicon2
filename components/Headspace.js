
import Head from 'next/head'
import Link from 'next/link'

//import styles from './Headspace.module.css'

const Headspace = () => {
	return (
		<>
			<Head>
			</Head>
	    	<header className="shadow">
	    		<h1>Linuxicon </h1>
	    		<h2>a haute grimoire</h2>
	    		<p>not for chodes</p>
	    	</header>
			<style jsx>{`
				header{
					width:33.3%;
					height: 100%;	
				}
				h1{
					color:blue;
				}
				div{background-color: blue: !important}
			`}</style>
			<style global jsx>{`
				*, *:before, *:after { box-sizing: border-box; -webkit-appearance:none;}
				body,h1,h2,h3,h4,ul,li,div,p,a {p adding: 0; margin: 0; text-decoration: none; list-style-type:none; } 
				body, input { font-size: 1rem; font-family: monospace; color: #9a9999; height: 100%; }
				a { color: rgb(230, 155, 131); }
				h1{font-size:322.336rem;}
				h1{font-size:2.4rem;}
				h3{font-size:1.6rem;}
				p {  }
				.shadow{ padding: 8px; border: none; border-radius: 24px; box-shadow: 7px 10px 20px 1px rgba(204, 189, 177, 0.48); } 
			`}</style>
		</>
	)
}

export default Headspace;






// import Head from 'next/head'
// import styles from './Headspace.module.css'

// const Headspace = () => {
// 	return(
// 		<>
// 			<button>Willie sent me.</button>
// 	    </>
// 	)
// } 


// export default Headspace;