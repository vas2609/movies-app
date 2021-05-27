/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Style from './single.module.css';
import { Image, Rate } from "antd";
import { connect } from "react-redux";
import { getSingleMove } from "../../store/action";
import AddComment from "./comments/AddComments";

function Single(props) {


  useEffect(() => {
    let moveId = props.match.params.id;
    props.getSingleMove(moveId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let { genres } = props.singleMuve;

  

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
          <div className={Style.list}>
            <ul>
              <li>{` ${genres}`}</li>
            </ul>
          </div>
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
      <div>
        <AddComment />
      </div>
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
