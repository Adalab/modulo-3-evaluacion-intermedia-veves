
import '../stylesheets/main.scss';

function App() {
  return <div className="App">
   <header>
      <h1>Mis clubs</h1>
      <div class="separator"></div>
    </header>
    <main>
      <section>
        <div class="card">
          <div class="title">
            <h3>#0</h3>
            <h3>Name</h3>
          </div>
          <p>Info 1</p>
          <p>Info 2</p>
        </div>
      </section>
      <section>
        <h2>Añadir un nuevo club</h2>
        <div class="separator"></div>
        <form>
          <input type="text" />
          <div>
            <label for="¿Está abierto entre semana?">
                <input
                  id="estresemana"
                  type="checkbox"
                  value="flightoption1"
                  name="flightoption1"
                />
                Abierto entre semana
            </label>
          </div>
          <div>
            <label for="miau">
                <input id="miau" type="checkbox" value="miau" name="miau" />
                Abierto los fines de semana
              </label>
          </div>
          <input type="button" value="Guardar"/>
        </form>
      </section>
    </main>
    </div>;
}

export default App;
