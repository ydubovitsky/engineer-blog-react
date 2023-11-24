import styles from './column-widgets.module.scss';
import { useContext } from 'react';
import { LangContext } from '../../../../../context/lang/LangContext';
import { AboutMeImage, FeedbackImage, GithubImage } from './images';
import Widget from './components/widget/widget.component';

const ColumnWidgets = (props) => {

  const { getLangData } = useContext(LangContext);
  const { columnWidgets } = getLangData();

  const showWidgetsList = () => {
    const widgets = [
      { imageSrc: AboutMeImage, text: columnWidgets.about, href: "https://github.com/ydubovitsky" },
      { imageSrc: FeedbackImage, text: columnWidgets.writeMe, href: "https://github.com/ydubovitsky" },
      { imageSrc: GithubImage, text: columnWidgets.github, href: "https://github.com/ydubovitsky" }
    ].map((props, idx) => (
      <Widget key={idx} imageSrc={props.imageSrc} text={props.text} href={props.href} />
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
