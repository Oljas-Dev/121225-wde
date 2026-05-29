function ParagraphsComponent({ pageContent }) {
  const { par1, par2, par3, heading1, heading2, heading3 } = pageContent;
  return (
    <div>
      <div>
        <h2>{heading1}</h2>
        <p>{par1}</p>
      </div>

      <div>
        <h2>{heading2}</h2>
        <p>{par2}</p>
      </div>

      <div>
        <h2>{heading3}</h2>
        <p>{par3}</p>
      </div>
    </div>
  );
}

export default ParagraphsComponent;
