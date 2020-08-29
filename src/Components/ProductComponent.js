import React from 'react'
import { Card, Icon,Image,Button } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)


const CardExampleCardProps = (props) => {

    const {product}=props;
    const {id,title,category,description,price,image}=product;

    console.log(product);
return(
    <Card style={{display:"inline-block",margin:"15px",padding:"15px"}} >
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>category:{category}</span>
      </Card.Meta>
      <Card.Description>
      {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Price:{price}
      </a>
    </Card.Content>
    <Button primary > View </Button>
    <Button primary > Add to Cart</Button>

  </Card>)
}
export default CardExampleCardProps;