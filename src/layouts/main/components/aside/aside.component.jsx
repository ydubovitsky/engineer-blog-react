import styles from './aside.module.scss';
import AboutMe from "./components/about-me/about-me.component";
import FollowMe from "./components/follow-me/follow-me.component";
import Search from "./components/search/search.component";
import Subscribe from "./components/subscribe/subscribe.component";

const AsideComponent = () => {
    return (
        <div className={styles.container}>
            <AboutMe />
            <FollowMe />
            <Subscribe />
            <Search />
        </div>
    )
};

export default AsideComponent;
