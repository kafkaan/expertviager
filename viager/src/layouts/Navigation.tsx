import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo-3-removebg-preview.png";

interface CirclePosition {
  top: number;
  left: number;
}

const NavigationBar = () => {
  const [circlePosition, setCirclePosition] = useState<CirclePosition>({
    top: 0,
    left: 0,
  });

  const [rectWidth, setRectWidth] = useState<number>(0);
  const [rectOpacity, setRectOpacity] = useState<number>(1);

  const activeItemRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (activeItemRef.current) {
      console.log(activeItemRef.current);
      const rect = activeItemRef.current.getBoundingClientRect();
      setCirclePosition({
        top: rect.bottom,
        left: rect.left,
      });
      setRectWidth(rect.width);
    } else {
      // console.log("activeItemRef.current is null");
      setRectOpacity(0);
    }
  }, []);

  const handleMouseEnter = (event: any) => {
    const rect = event.target.getBoundingClientRect();
    console.log(event.target);
    setRectWidth(rect.width);
    setCirclePosition({ top: rect.bottom, left: rect.left });
    setRectOpacity(1);
  };

  const handleMouseLeave = () => {
    if (activeItemRef.current) {
      const rect = activeItemRef.current.getBoundingClientRect();
      setRectWidth(rect.width);
      setCirclePosition({
        top: rect.bottom,
        left: rect.left,
      });
    } else {
      setRectOpacity(0);
    }
  };

  const getNavLinkClass = (path: string) =>
    location.pathname === path
      ? "navigation__desktop__link navigation__desktop__link--active"
      : "navigation__desktop__link";

  const getNavItemClass = (path: string) =>
    location.pathname === path
      ? "navigation__desktop__item navigation__desktop__item--active"
      : "navigation__desktop__item";

  return (
    <section className="navigation">
      <div className="navigation__mobile">
        <div className="navigation__mobile__logo">
          <img
            src={logo}
            alt="logo"
            className="navigation__mobile__logo__img"
          />
          <h3 className="logo-text">L'Expert Viager</h3>
        </div>

        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation__mobile__checkbox"
        />
        <label htmlFor="navi-toggle" className="navigation__mobile__button">
          <span className="navigation__mobile__icon">&nbsp;</span>
        </label>

        <nav className="navigation__mobile__nav">
          <ul className="navigation__mobile__list">
            <li className="navigation__mobile__item">
              <Link to="/" className="navigation__mobile__link">
                Accueil
              </Link>
            </li>
            <li className="navigation__mobile__item">
              <Link to="/guide" className="navigation__mobile__link">
                Guide du viager
              </Link>
            </li>
            <li className="navigation__mobile__item">
              <Link to="/services" className="navigation__mobile__link">
                Services
              </Link>
            </li>
            <li className="navigation__mobile__item">
              <Link to="/contact" className="navigation__mobile__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navigation__desktop">
        <div className="navigation__desktop__logo">
          <img
            src={logo}
            alt="logo"
            className="navigation__desktop__logo__img"
          />
          <h3 className="logo-text">L'Expert Viager</h3>
        </div>
        <div
          className="circle"
          style={{
            top: `${circlePosition.top}px`,
            left: `${circlePosition.left + rectWidth / 2}px`,
            opacity: rectOpacity,
          }}
        />
        <nav className="navigation__desktop__nav ">
          <ul className="navigation__desktop__list">
            <li
              className={getNavItemClass("/")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={location.pathname === "/" ? activeItemRef : null}
            >
              <Link to="/" className={getNavLinkClass("/")}>
                Accueil
              </Link>
            </li>
            <li
              className={getNavItemClass("/guide")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={location.pathname === "/guide" ? activeItemRef : null}
            >
              <Link to="/guide" className={getNavLinkClass("/guide")}>
                Guide du viager
              </Link>
            </li>
            <li
              className={getNavItemClass("/services")}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={location.pathname === "/services" ? activeItemRef : null}
            >
              <Link to="/services" className={getNavLinkClass("/services")}>
                Services
              </Link>
            </li>
          </ul>
        </nav>

        <div className="navigation__desktop__buttons">
          <Link
            to="/contact"
            className="navigation__desktop__contact btn btn--brown"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
