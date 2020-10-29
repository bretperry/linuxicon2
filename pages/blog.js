// // TODO: Need to fetch `posts` (by calling some API endpoint)
// //       before this page can be pre-rendered.

// function Blog({ posts }) {
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li>{post.title}</li>
//       ))}
//     </ul>
//   )
// }

// // // This function gets called at build time
// // export async function getStaticProps() {
  
// //   // // Call an external API endpoint to get posts
// //   // const res = await fetch('https://.../posts')
// //   // const posts = await res.json()

// //   const posts = [
// //   	{"name":"dd", "desc":"disc duplicator"},
// //   	{"name":"ls", "desc":"list files"},
// //   	{"name":"killall", "desc":"kill process by name"},
// //   ];

// //   // By returning { props: posts }, the Blog component
// //   // will receive `posts` as a prop at build time
// //   return {
// //     props: {
// //       posts,
// //     },
// //   }
// // }

// // console.log(posts);

// export default Blog