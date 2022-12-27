import { useMemo, useState } from "react";
import { Filter, Product } from "../../types/types";
import HeadingFilters from "./HeadingFilters";
import { BsCircleFill } from "react-icons/bs";
import { Checkbox, Flex, Icon, ListItem, UnorderedList } from "@chakra-ui/react";

type Props = {
  products: Product[];
  onChange: (filter : Filter) => void;
}; 

const ColorFilter : React.FC<Props> = ({products, onChange}) => {
  const [selected, setSelected] = useState<Set<string>>(() => new Set())
  // It will run only when a dependecy changes
  const colors = useMemo(() => {
    const buffer : Set<string> = new Set();

    for (let product of products){
      buffer.add(product.color)
    }
    
    return Array.from(buffer);
  }, [products]);

  function handleChange(color: string, isChecked: boolean){
    const draft= structuredClone(selected);

    if(isChecked){
      draft.add(color);
    } else {
      draft.delete(color);
    };

    onChange(draft.size ? (product)=>draft.has(product.color) : null);

    setSelected(draft);
  }

  return (
    <Flex
      flexDirection={'column'}
    >
      <HeadingFilters child='Colors :' />
      <UnorderedList
        marginInlineStart={0}
      >
        {colors.map((color) => (
          <ListItem
            key={color}
            listStyleType='none'
            fontSize={['sm','md','lg']}
          >
            <Flex
              alignItems={'center'}
              gap={2}
            >
              <Checkbox
                onChange={(e) => handleChange(color, e.target.checked)}
                name='color'
                value={color}
                colorScheme={'yellow'}
                borderColor={'primary'}
              />
              {color}
              <Icon as={BsCircleFill} color={color}/>
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default ColorFilter;