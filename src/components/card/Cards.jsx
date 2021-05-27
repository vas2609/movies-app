import React from 'react';
import { Card, Rate } from "antd";
import { Link } from 'react-router-dom';


function Cards(props){

    const { Meta } = Card;

    return (
      <div>
        <Link to={`/single/${props.id}`}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={props.img} />}
          >
            <Meta title={props.title} />
            <Rate disabled defaultValue={Math.ceil(props.reating)} />
          </Card>
        </Link>
      </div>
    );
}



export default Cards;