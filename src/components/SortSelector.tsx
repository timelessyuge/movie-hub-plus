import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedOrder?: string;
  onSelectOrder: (sort_by: string) => void;
}

const SortSelector = ({ selectedOrder, onSelectOrder }: Props) => {
  const sortOrder = [
    { lable: "Average Vote", value: "vote_average.desc" },
    { lable: "Popularity", value: "popularity.desc" },
    { lable: "Release Date", value: "primary_release_date.desc" },
    { lable: "Revenue", value: "revenue.desc" },
    { lable: "Title", value: "title.asc" },
  ];

  const currentOrder = sortOrder.find((order) => order.value === selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.lable || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order, index) => (
          <MenuItem key={index} onClick={() => onSelectOrder(order.value)}>
            {order.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
