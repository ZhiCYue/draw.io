
class App extends Component {

    constructor() {
      super();
      this.state = {
        title: 'Title',
        list: 2
      }
    }
  
    componentDidMount() {
      batchedUpdates(() => {
        this.setState({
          title: 'new Title'
        })
      })
    }
  
    render() {
      return (
        <div className="App">
          <div>{this.state.title}</div>
          <ul className='list-wrapper'>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
          </ul>
        </div>
      )
    }
  }
  
  export default App