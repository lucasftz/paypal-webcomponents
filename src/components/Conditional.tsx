type Props = {
  toRender: string;
  renderObj: { [renderState: string]: string };
};

function Conditional({ toRender, renderObj }: Props) {
  // renders <toRender>'s value of <renderObj> as text in a div
  return renderObj.hasOwnProperty(toRender) ? (
    <div>{renderObj[toRender]}</div>
  ) : (
    <></>
  );
}

export default Conditional;
