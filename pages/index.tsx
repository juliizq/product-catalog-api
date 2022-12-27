import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import { useEffect, useMemo, useState } from "react";
import { Box, Center, ChakraProvider, Flex, Grid } from "@chakra-ui/react";
import customTheme from "../theme";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PriceRangeFilter from "../components/Filters/PriceRangeFilter";
import { Filter, Product } from "../types/types";
import ColorFilter from "../components/Filters/ColorFilter copy";
import RatingFilter from "../components/Filters/RatingFilter";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export async function getServerSideProps(context: any) {
  try {
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const products = await fetch("/api/products");
      const resultsJson = await products.json();
      setProducts(resultsJson);
    })();
  }, []);

  const [filters, setFilters] = useState<Record<string, Filter>>({
    price: null,
    color: null,
    rating: null,
  });

  const matches = useMemo(() => {
    const filtersToApply = Object.values(filters).filter(Boolean);
    let matches = products;

    for (let filter of filtersToApply) {
      matches = matches!.filter(filter!);
    }

    return matches;
  }, [products, filters]);

  return (
    <ChakraProvider theme={customTheme}>
      <div className="container">
        <Head>
          <title>Product Catalog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Center
          h={"2rem"}
          background={"linear-gradient(to right, #5614b0, #dbd65c)"}
          color={"white"}
          fontSize={["xs", "sm", "md"]}
        >
          This website is still under development.
        </Center>
        <Header />
        <Nav />
        {/* <Center mb={['1rem']}>
          <hr style={{ width: "97%", borderColor: "#b8b5b1", height: "4px" }} />
        </Center> */}
        <Box as="main" py={["2rem"]} mx={["2rem"]}>
          <Flex gap={"5"}>
            <Flex
              flexDirection={"column"}
              fontFamily={"detail"}
              h={"100%"}
              gap={4}
              flex={1}
            >
              <PriceRangeFilter
                onChange={(filter: Filter) =>
                  setFilters((filters) => ({ ...filters, price: filter }))
                }
              />
              <ColorFilter
                products={products}
                onChange={(filter: Filter) =>
                  setFilters((filters) => ({ ...filters, color: filter }))
                }
              />
              <RatingFilter
                onChange={(filter: Filter) =>
                  setFilters((filters) => ({
                    ...filters,
                    rating: filter,
                  }))
                }
              />
            </Flex>
            <Flex flex={"6"}>
              <Grid
                templateColumns={"repeat(auto-fill,minmax(12rem, 30%))"}
                flex={1}
                gap={2}
                justifyContent={"center"}
              >
                {matches.map((product) => (
                  <article key={product.id}>
                    <ProductCard product={product} />
                  </article>
                ))}
              </Grid>
            </Flex>
          </Flex>
        </Box>
        <Footer />
      </div>
    </ChakraProvider>
  );
}
