interface ProductProps {
  params: {
    id: string;
  };
}

const Product = (props: ProductProps) => {
  return <div>Product: {props.params.id}</div>;
};

export default Product;
