import EmailIconAtomicComponent from '../../shared/ui/email-icon/email-icon.atomic-component';
import GithubIconAtomicComponent from '../../shared/ui/github-icon/github-icon.atomic-component';
import SkypeIconAtomicComponent from '../../shared/ui/skype-icon/skype-icon.atomic-component';
import TgIconAtomicComponent from '../../shared/ui/tg-icon/tg-icon.atomic-component';
import TwitterIconAtomicComponent from '../../shared/ui/twitter-icon/twitter-icon.atomic-component';
import styles from './social-icons-list.module.scss';

const SocialIconsListComponent = ({ iconSize }) => {
  return (
    <div className={styles.container}>
      <TwitterIconAtomicComponent size={iconSize} />
      <SkypeIconAtomicComponent size={iconSize} />
      <TgIconAtomicComponent size={iconSize} />
      <EmailIconAtomicComponent size={iconSize} />
      <GithubIconAtomicComponent size={iconSize} />
    </div>
  )
}

export default SocialIconsListComponent;