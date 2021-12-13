import Hero from "../../components/main/hero/hero.component";
import PostList from "../../components/main/post-list/post-list.component";
import Footer from "../../components/common/footer/footer.component";
import SocialLinks from "../../components/main/social-links/social-links.component";

import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <SocialLinks/>
      <PostList />
      <Footer/>
    </div>
  )
}

export default Main;