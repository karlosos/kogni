import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let body = `    
  <section class="hero is-fullheight is-default is-bold">
    <div class="hero-head">
    </div>
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="columns is-vcentered">
                <div class="column is-5">
                    <figure class="image is-4by3">
                        <img src="https://picsum.photos/800/600/?random" alt="Description">
                    </figure>
                </div>
                <div class="column is-6 is-offset-1">
                    <h1 class="title is-2">
                        Superhero Scaffolding
                    </h1>
                    <h2 class="subtitle is-4">
                        Let this cover page describe a product or service.
                    </h2>
                    <br>
                    <p class="has-text-centered">
                        <a class="button is-medium is-info is-outlined">
                            Learn more
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="hero-foot">
    </div>
  </section>`

  return (
  <div  dangerouslySetInnerHTML={{__html: body}} />
    
  );
}

export default App;
