import { useEffect, useState, useContext } from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "../../contexts/ThemeContext";

function TabNav() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const router = useRouter();

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router.pathname]);

  return (
    <Nav variant="pills" className="flex-column nav">
      <div className={`borda ${theme}`}>
        <div className={`slide ${theme}`} style={{ marginTop: "40vh" }}>
          <Nav.Item>
            <Link href="/" className="estilolink" legacyBehavior passHref>
              <Nav.Link className={`${theme}`} active={activeTab === "/"}>
                <div className={`itens ${theme}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-file-earmark-plus"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "10px" }}
                  >
                    <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                  </svg>
                </div>
              </Nav.Link>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link href="/plusclient" legacyBehavior passHref>
              <Nav.Link
                className={`${theme}`}
                active={activeTab === "/plusclient"}
                eventKey="user"
              >
                <div className={`itens ${theme}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-person-add"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "10px" }}
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                  </svg>
                </div>
              </Nav.Link>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link href="/clientlist" legacyBehavior passHref>
              <Nav.Link
                className={`${theme}`}
                active={activeTab === "/clientlist"}
                eventKey="user"
              >
                <div className={`itens ${theme}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-people"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "10px" }}
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                  </svg>
                </div>
              </Nav.Link>
            </Link>
          </Nav.Item>
        </div>

        <Nav.Item className={`slide ${theme}`} style={{ marginTop: "40vh" }}>
          <div className={`itens ${theme}`}>
            <ThemeButton />
          </div>
        </Nav.Item>
      </div>
    </Nav>
  );
}

export default TabNav;
