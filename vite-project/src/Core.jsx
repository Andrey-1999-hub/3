import { useState, lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router"; 
import { currentTheme } from "./Context";
import Header from "./component/Header"; 
import Footer from "./component/Footer"; 
import style from "./App.module.css"; 

const App = lazy(() => import("./App"));
const Dop = lazy(() => import("./Dop"));

// Создаем "фейковую" загрузку для текстовой страницы
const createFakeLoadingComponent = (text, delay) => {
  let status = "pending";
  let result;
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      status = "success";
      result = () => <h1 style={{ color: "inherit", textAlign: "center", padding: "50px" }}>{text}</h1>;
      resolve();
    }, delay);
  });

  return function FakeComponent() {
    if (status === "pending") {
      throw promise; // Заставляем Suspense показать fallback
    }
    return result();
  };
};

const SecondPage = createFakeLoadingComponent(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit...", 
  3000
);

function Core() {
    const [theme, setTheme] = useState("light"); 
    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <currentTheme.Provider value={theme}>
            <div className={style.main} data-theme={theme}>
                
                <Header switchTheme={switchTheme} />
                
                <div className={style.nav}>
                    <NavLink to="/" className={({ isActive }) => isActive ? `${style.navLink} ${style.activeLink}` : style.navLink}>
                        На главную
                    </NavLink>
                    <NavLink to="/second" className={({ isActive }) => isActive ? `${style.navLink} ${style.activeLink}` : style.navLink}>
                        На дополнительную
                    </NavLink>
                    <NavLink to="/3" className={({ isActive }) => isActive ? `${style.navLink} ${style.activeLink}` : style.navLink}>
                        На другую
                    </NavLink>
                </div>

                <Suspense fallback={
                    <div style={{ textAlign: "center", padding: "100px 20px", color: "inherit" }}>
                        <h2 style={{ fontSize: "2rem" }}>⏳ Загрузка страницы...</h2>
                        <div style={{
                            margin: "20px auto",
                            width: "50px",
                            height: "50px",
                            border: "5px solid #e04f9f",
                            borderTop: "5px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite"
                        }}></div>
                        <style>{`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}</style>
                    </div>
                }>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/second" element={<SecondPage />} />
                        <Route path="/3" element={<Dop />} />
                    </Routes>
                </Suspense>

                <Footer />
            </div>
        </currentTheme.Provider>
    );
}

export default Core;