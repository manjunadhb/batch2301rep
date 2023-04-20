import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Manjunadh</h1>
      <h1>M. Shyam Sundar</h1>
      <div id="divravi">
        <h1> G.RAVIKUMAR</h1>
        <h1> INDIAN ARMEDFORCES</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/ADGPI_Indian_Army.svg"></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Badge_of_the_Indian_Air_Force.svg/1857px-Badge_of_the_Indian_Air_Force.svg.png"></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Indian_Navy_Insignia.svg/1200px-Indian_Navy_Insignia.svg.png"></img>
      </div>
      <br></br>
      <form>
        <div>
          <fieldset>
            <legend>Email Login</legend>
            <label>Email Id</label>
            <input></input>
            <br></br>
            <label>Password</label>
            <input type="password"></input>
            <br></br>
            <button id="formbutton">LOGIN</button>
          </fieldset>
        </div>
      </form>
      <h1>SASS Practice</h1>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <button type="button" class="btn btn-link">
        Link
      </button>
      <br></br>
      <br></br>
      <div className="brninfo">
        <h2>Project of Karthick KN</h2>
        <h1>Learnig Git Clone, Push, Pull, Remote Repositary</h1>
        <h2>Center: BRN Infotech Private Limited</h2>
        <h2>Course: MERN Full Stack Development</h2>
        <h3>Professor: Manjunadh S</h3>
        <h4>Batch Code: 2301</h4>
        <h4>Students Name List</h4>
        <ol>
          <li>Srujan Abhishek</li>
          <li>Karthick KN</li>
          <li>Bandi Saikiran</li>
          <li>Supraja Pericherle </li>
          <li>Anil Gadari</li>
          <li>Narendra Sai</li>
          <li>Srinivas K</li>
          <li>Shaik Habeeb</li>
          <li>Shekar Yeshala</li>
          <li>Jeevan V</li>
          <li>Jagadeesh G</li>
          <li>Sathwik Gundeti</li>
          <li>Mohammed Yonus Ali</li>
        </ol>
        <h4>Best wishes for your Interviews Thanks for all !!!</h4>
      </div>
    </div>
  );
}

export default App;
