import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon
} from "@chakra-ui/react";
import { useState } from "react";
import { Filter } from "../../types/types";
import HeadingFilters from "./HeadingFilters";

type Props = {
  onChange: (filter: Filter) => void;
};

const PriceRangeFilter: React.FC<Props> = ({ onChange }) => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  function handleChangeMin(value: number) {
    setMin(value);
    onChange(
      value ? (product) => product.price >= value && product.price <= max : null
    );
  }

  function handleChangeMax(value: number) {
    setMax(value);
    onChange(
      value ? (product) => product.price >= min && product.price <= value : null
    );
  }

  return (
    <Flex flexDirection={"column"}>
      <HeadingFilters child='Price :'/>
      <Flex
        gap={2}
        flexDirection={'column'}
        maxW={'200px'}
      >
        <InputGroup
          size={['sm']}
          borderColor={'third'}
        >
          <InputLeftAddon
            children="€"
            borderRadius={'lg'}
            backgroundColor={'white'}
          />
          <Input
            type="number"
            name="minPrice"
            placeholder="min"
            onChange={(e) => handleChangeMin(Number(e.target.value))}
            borderRadius={'lg'}
            _focusVisible={{
              borderColor:'none'
            }}
            _active={{
              borderColor:'third'
            }}
            _hover={{
              borderColor:'third'
            }}
          />
        </InputGroup>
        <InputGroup
          size={'sm'}
          borderColor={'third'}
        >
          <InputLeftAddon
            children="€"
            borderRadius={'lg'}
            backgroundColor={'white'}
          />
          <Input
            type="number"
            name="maxPrice"
            placeholder="max"
            onChange={(e) => handleChangeMax(Number(e.target.value))}
            borderRadius={'lg'}
            _focusVisible={{
              borderColor:'none'
            }}
            _active={{
              borderColor:'third'
            }}
            _hover={{
              borderColor:'third'
            }}
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default PriceRangeFilter;
