import classNames from "classnames/bind";
import styles from "./Popper.module.scss"; // Fixed extension

const cx = classNames.bind(styles);

function Wrapper({ children }) {
    // Destructure children prop
    return <div className={cx("wrapper")}>{children}</div>;
}

export default Wrapper;
