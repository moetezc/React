import React from 'react';
import logo from './logo.svg';
import './App.css';
import user from '../src/1.png'
function App() {
  return (
    <div className="App">
   <div class="row">
    <div class="col-lg-6 m-auto">
        <div class="card mt-5 bg-light">
            <div class="card-title text-center mt-3">
                <img src={user}  width="80px"></img>
            </div>
            <div class="card-body">
                <form>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-user fa-2x"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control py-4" placeholder="User Name">
                          </input>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-lock fa-2x"></i>
                            </span>
                        </div>
                        <input type="email" class="form-control py-4" placeholder="user@gmail.com"></input>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-lock fa-2x"></i>
                            </span>
                        </div>
                        <input type="password" class="form-control py-4" placeholder="Password"></input>
                    </div>
                    
                    <button class="btn btn-primary">Login Now</button>
                    <p class="float-right text-black mb-3">
                      <input type="checkbox"></input> Remember me</p>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

export default App;
