function Component() {
    return (
        <h1>component single </h1>
    );
  }
function Componentchild(props) {
    return (
      <div>
        <h1>component children  </h1>
          <p>{props.children}</p>
        </div>
    );
  }

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    alert('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

const API = 'https://hn.algolia.com/api/v1/search?query=';


class UserList extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ hits: data.hits, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        {hits.map(hit =>
          <div key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </div>
        )}
      </div>
    );
  }
}
const API1 = 'http://5.189.151.166/get_services_main_screen';


class Service  extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  componentDidMount() {
    fetch(API1)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
  render() {
    const aaa = this.state;

    return (
      <div>
      aaaaa
      </div>
    );
  }
}




ReactDOM.render(
  <div>
      <Component />
      <Componentchild > Ngu ma tuong minh khon </Componentchild>
      <App />
      <Toggle />
      <ActionLink />
      <UserList />
      <Service />
    </div>
  ,document.getElementById('root')
);
