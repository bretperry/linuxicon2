import Link from 'next/link'
import content from '../termList'
import styled from 'styled-components'

const StyledInput = styled.input`
  height:88px;
  width:300px;
  margin:12px;
  position: fixed;
  top: 100px;
  padding:1rem;
`

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
    alert("boing");
  }
  render() {
    return (
    	<StyledInput type="text" value={this.state.value} onChange={this.handleChange} className='shadow'/>
    )
  }
}


const LinuxList = () => {
	return (
		<>
			<InputZone />
			<ul>
			    {content.pages.map(page =>
			        <li className="shadow" key={page.path}>
			          
			          <h3><Link href="google.com"  as={page.path}>
			            <a>{page.title}</a>
			          </Link></h3>
			          <p>{page.desc}</p>
			        </li>
			    )}
			</ul>
			<style  jsx>{`
				ul{
					position:absolute; 
					top:12px;  
					left: 350px;
					overflow: visible;
				}
				li{
					background-color: #fff;
					width: 300px;
					text-align: center;
					margin-bottom:12px;	
				}
			`}</style>
		</>
	)
}


export default LinuxList;