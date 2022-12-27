import { Checkbox, Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Filter} from "../../types/types";
import HeadingFilters from "./HeadingFilters";

type Props = {
  onChange: (filter : Filter) => void;
}; 

const RatingFilter : React.FC<Props> = ({onChange}) => {
  const [selected, setSelected] = useState<Set<number>>(() => new Set())

  function handleChange(rating: number, isChecked: boolean){
    const draft= structuredClone(selected);

    if(isChecked){
      draft.add(rating);
    } else {
      draft.delete(rating);
    };

    onChange(draft.size ? (product)=>draft.has(product.rating) : null);

    setSelected(draft);
  }

  return (
    <Flex
      flexDirection={'column'}
    >
      <HeadingFilters child='Ratings :' />
      <UnorderedList
        marginInlineStart={0}
      >
        {[1,2,3,4,5].map((rating) => (
          <ListItem
            key={String(rating)}
            listStyleType='none'
          >
            <Flex
              alignItems={'center'}
              gap={2}
            >
              <Checkbox
                onChange={(e) => handleChange(rating, e.target.checked)}
                name='rating'
                value={rating}
                colorScheme={'yellow'}
                borderColor={'primary'}
              />
            {'★'.repeat(rating).padEnd(5, '☆')}
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default RatingFilter;