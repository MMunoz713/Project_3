import React, {useState, UseEffect, useEffect} from 'react';
import M from 'materialize-css';
import { Card, Icon, CardTitle, } from 'react-materialize';


const Item = (props) => { 
    return(
    <Card
      actions={[
        <a target= "_blank" key="1" href={props.link}>Link to Article</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle className="card-image shoes" image={props.image} />}
      
      revealIcon={<Icon>more_vert</Icon>}
    >
        <h4>{props.title}</h4>
        <h5>{props.pubDate}</h5>
    </Card>
    );
};

export default Item;