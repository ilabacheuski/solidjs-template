import { render } from 'solid-js/web';

function HelloWorld() {
  return <div>HelloWorld</div>;
}

render(() => <HelloWorld />, document.getElementById('app')!);