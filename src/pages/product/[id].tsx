import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Stripe from "stripe";
import { CartContext } from "../../context/CartContext";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";
import MyLoader from "../../components/Loader";
import { stripe } from "../../lib/stripe";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { placeOnCart } = useContext(CartContext);
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <ProductContainer>
        <MyLoader />
      </ProductContainer>
    );
  }

  function handlePlaceOnCart() {
    placeOnCart({ ...product });
  }

  return (
    <>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price / 100)}
          </span>
          <p>{product.description}</p>
          <button onClick={handlePlaceOnCart}>Comprar agora</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        defaultPriceId: price.id,
        price: price.unit_amount,
        // price: new Intl.NumberFormat("pt-BR", {
        //   style: "currency",
        //   currency: "BRL",
        // }).format(price.unit_amount! / 100),
      },
    },
    revalidate: 60 * 60 * 1,
  };
};
