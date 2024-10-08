import Button from "../../Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <Button className={cx("menu-item")} leftIcon={data.icon}>
            {data.tittle}
        </Button>
    );
}

export default MenuItem;
