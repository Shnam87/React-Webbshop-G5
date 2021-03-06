import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Article, Images, Pcards, Button, Section, Title} from '../styles/styledComponents'

function Products({addProductToCart}) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/cars.php');
      const data = await response.json();
      //console.log(data);
      setProducts(data);
      
    } catch(error) {
      console.log(error);
    }
  }

  useEffect( () => {
    fetchData();
  }, [] );

  const handleAddtocart= (product)=> {
    addProductToCart(product)
    console.log(product)
  }

  return (
    <main>
    <Title>Alla produkter</Title>
    <Article>
    {
      products.map( product => (
        <Pcards key={product.id}>
          <Section>
            <Link to={`/product/${product.id}`}>
              <Images src={product.url} alt={product.title} ></Images>
            </Link>
	        </Section>
          <Section>
            <Link to={`/product/${product.id}`}>
		        <h2>{product.title}</h2>
            {/* <p>{product.description}</p> */}
            <p>Läs mer ...</p></Link>
            <p>{product.storage} items in stock. </p>
		        <p>{product.price} SEK</p>
		        <Button onClick={()=>{handleAddtocart(product)}}> Add to Cart</Button>
	        </Section>
        </Pcards>
      ))
    }
    </Article>
    </main>
    
  )
}

export default Products