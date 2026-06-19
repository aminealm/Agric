import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

function DataInfo({ number, title, body }) {
  const [show, setShow] = useState(false);

  return (
    <div className="carrer">
      <div
        className={show ? "post-card-open" : "post-card"}
        onClick={() => setShow(!show)}
      >
        <div className="collapse-option">
          <div className="collapse-2">
            <h1>{number}</h1>
            <h5>{title}</h5>
          </div>

          <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
        </div>

        <div className="desctiption ">{show ? <p>{body}</p> : null}</div>
      </div>
    </div>
  );
}

export default DataInfo;
