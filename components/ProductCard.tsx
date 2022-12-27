import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { Product } from "../types/types";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card borderRadius="lg" backgroundColor={"white"} h={"100%"}>
      <CardBody>
        <Image
          src={product.image}
          borderRadius="lg"
          width={["100%"]}
          h={["120px", "200px", "250px", "350px"]}
          objectFit={"cover"}
          mb={"15px"}
        />
        <Stack spacing={[".2rem", ".3rem"]}>
          <Text
            fontFamily={"detail"}
            fontWeight={"600"}
            fontSize={["sm", "md", "lg", "xl"]}
          >
            {product.name}
          </Text>
          <Text>{"★".repeat(product.rating).padEnd(5, "☆")}</Text>
          <Text>
            {product.price.toLocaleString("fr-BE", {
              style: "currency",
              currency: "EUR",
            })}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
