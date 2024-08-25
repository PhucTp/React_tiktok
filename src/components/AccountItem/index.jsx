import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9a5240c6f2b363f209e9663750b25d1b.jpeg?lk3s=30310797&nonce=38472&refresh_token=0a1c7d1273866a191cb872759373f5fe&x-expires=1724320800&x-signature=t12p8IkVPf7v1r1dc3Gs6br3tec%3D&shp=30310797&shcp=-"
                alt="Hoaa"
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Thi Hoa</span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx("username")}>nguyenthihoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
