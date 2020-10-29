
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import content from '../termList'
import Headspace from '../components/Headspace'
import Footer from '../components/Footer'


class InputZone extends React.Component {
 constructor(props) {
    super(props);
    this.state = {value: ''};
    // We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this);
  }
  render() {
    return (<StyledInput type="text" value={this.state.value} onChange={this.handleChange} className="shadow" />)
  }
}

const Main = () => (
  <div>
    <Headspace />

    <MainSpace>
      <InputZone />
      <CommandList>
        {content.pages.map(page =>
            <Item className="shadow" key={page.path}>
              
              <h3><Link href="[...slug]"  as={page.path}>
                <a>{page.title}</a>
              </Link></h3>
              <p>{page.desc}</p>
            </Item>,
        )}
      </CommandList>
    </MainSpace>

    <Footer />


    <style global jsx>{`
      *, *:before, *:after { box-sizing: border-box; -webkit-appearance:none;}
      body,h1,h2,h3,h4,ul,li,div,p,a {p adding: 0; margin: 0; text-decoration: none; list-style-type:none; } 
      body, input { font-size: 1rem; font-family: monospace; color: #9a9999; height: 100%; }
      a { color: rgb(230, 155, 131); }
      h1{font-size:3.6rem;}
      h1{font-size:2.4rem;}
      h3{font-size:1.6rem;}
      p {  }
      .shadow{ padding: 8px; border: none; border-radius: 24px; box-shadow: 7px 10px 20px 1px rgba(204, 189, 177, 0.48); } 
    `}</style>
  </div>
)
const HeadSpace = styled.header`
  position:fixed;
  left:0;
  width:33.33333%;
  height; 100%;
`
const Logo = styled.h1`
  height: 100px;
  line-height:100px;
  padding-left: 20px;
`
const StyledInput = styled.input`
  height:88px;
  width:90%;
  margin:0 5%;
  position: absolute;
  top: 100px;
  padding:1rem;
`
const MainSpace = styled.div`
  width: 66.66667%;
  position:absolute;
  left: 33.33333%;
`
const CommandList = styled.ul`
  width:100%;
  margin-top:100px;
  overflow:scroll;
`
const Item = styled.li`
  background-color: #fff;
  width: 50%;
  text-align: center;
  margin-bottom:12px;
`

export default Main;

// export async function getStaticPaths() 
// {
//   const paths = content.pages.map(
//     page => {
//       const slug = page.path.split('/').slice(1);
//       return { params: {slug} };
//     }
//   );
//   return {paths, fallback: true};
// }

// export async function getStaticProps({params}) 
// {
//   const currentPath = `/${params.slug.join('/')}`;
//   const page = content.pages.find(page => page.path === currentPath) || {notfound: true};
//   return {props: {page}};
// }

/* thank you for checking it out! */
