import styles from './column-widgets.module.css';
import { useContext } from 'react';
import { LangContext } from '../../../../context/lang/LangContext';
import { AboutMeImage, FeedbackImage, GithubImage } from './images';
import Widget from './widget/widget.component';

const ColumnWidgets = (props) => {

  const { getLangData } = useContext(LangContext);
  const { columnWidgets } = getLangData();

  const showWidgetsList = () => {
    const widgets = [
      { imageSrc: AboutMeImage, text: columnWidgets.about, href: "https://github.com/y-dubovitsky" },
      { imageSrc: FeedbackImage, text: columnWidgets.writeMe, href: "https://github.com/y-dubovitsky" },
      { imageSrc: GithubImage, text: columnWidgets.github, href: "https://github.com/y-dubovitsky" }
    ].map(props => (
      <Widget imageSrc={props.imageSrc} text={props.text} href={props.href} />
    ));

    return widgets;
  }

  return (
    <div className={styles.container}>
      {showWidgetsList()}
    </div>
  )
}

export default ColumnWidgets;
