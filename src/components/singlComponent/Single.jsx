import React, { useEffect } from "react";
import Style from './single.module.css';
import { Image, Rate } from "antd";
import { connect } from "react-redux";
import { getSingleMove } from "../../store/action";

function Single(props) {


  useEffect(() => {
    let moveId = props.match.params.id;
    props.getSingleMove(moveId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

let downLink = props.singleMuve.torrents.map((item) => {
  return item.url;
});

console.log(downLink);



  return (
    <div>
      <div className={Style.container}>
        <div className={Style.img}>
          <Image src={props.singleMuve.medium_cover_image} />
        </div>
        <div className={Style.title}>
          <h2>{props.singleMuve.title}</h2>
          <h3>{props.singleMuve.slug}</h3>
          <Rate disabled defaultValue={Math.ceil(props.singleMuve.rating)} />
          <h4>
            <a href={downLink} target='blank'> Torren Link </a>
          </h4>
        </div>
      </div>
      <div className={Style.paragraf}>
        <h1>Description</h1>
        <p>{props.singleMuve.description_full}</p>
      </div>
      <hr />
      <div className={Style.piture}>
        <Image src={props.singleMuve.background_image_original} width={700} />
      </div>
      <hr />
      <div></div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    singleMuve: state.singleMuve,
  };
};

let mapDispatchToProps = {
  getSingleMove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Single);
