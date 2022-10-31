import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Productos";
import NewOrEditProduct from "./components/NewOrEditProduct";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
      <Router>
          <Provider store={store}>
          <Header />
          <div className="container mt-5">
              <Routes>
                  <Route path="/" element={<Products />} />
                  <Route
                      path="/products/new"
                      element={<NewOrEditProduct isOnEditMode={false} />}
                  />
                  <Route
                      path="/products/edit/:id"
                      element={<NewOrEditProduct isOnEditMode={true} />}
                  />
              </Routes>
            </div>
        </Provider>
      </Router>
  );
}

export default App;
