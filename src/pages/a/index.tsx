import "./index.scss";
import Presenter from "./presenter";

const PageThree = () => {
  const [states, events] = Presenter();

  const { list } = states;
  const { changeList } = events;

  return <div onClick={changeList}>{list}</div>;
};

export default PageThree;
