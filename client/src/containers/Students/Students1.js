
postSelectedHandler = (id) => {
  // this.props.history.push({ pathname: '/posts/' + id });
  // or:  
  this.props.history.push('/posts/' + id);
}

render() {
  let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
  if (!this.state.error) {
    posts = this.state.posts.map(post => {
      return (
        // <Link to={'/posts/' + post.id} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={this.state.author}
          clicked={() => this.postSelectedHandler(post.id)} />
        // </Link>
      );
    })
  }
