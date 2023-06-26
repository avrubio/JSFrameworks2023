export function AccordionSection(props) {
  // if collasped/ close
  return (
    <>
      {/* <div classname="title active"> */}
      <div className={props.isOpen ? "title active " : "title"}>
        <i className="dropdown icon"></i>
        {props.title}
      </div>
      {/* <div class="content active"> */}
      <div className={props.isOpen ? "content active" : "content"}>
        {/* <p class="transition visibile"> */}
        <p
          className={props.isOpen ? "transition visible" : "transition hidden"}
        >
          {props.paragraph}
        </p>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div class="title active">
  //       <i class="dropdown icon"></i>
  //       Why would anyone use React?
  //     </div>
  //     <div class="content active">
  //       <p class="transition visible">
  //         One of the main benefits of using React JS is its potential to reuse
  //         components. It saves time for developers as they don't have to write
  //         various codes for the same features. Furthermore, if any changes are
  //         made in any particular part, it will not affect other parts of the
  //         application.
  //       </p>
  //     </div>
  //   </>
  // );
}
