
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



)
// const HeadSpace = styled.header`
//   position:fixed;
//   left:0;
//   width:33.33333%;
//   height; 100%;
// `
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
  margin:100px 33.33333% 0 0 ;
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
