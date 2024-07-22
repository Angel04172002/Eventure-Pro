import 'bootstrap/dist/css/bootstrap.css';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Eventure Pro</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <a className="nav-link text-dark">За нас</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark">Услуги</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark">Обекти</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark">Сравни</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark">Постове</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark">Продукти</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark">Добави заявка</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark">Моите продукти</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}