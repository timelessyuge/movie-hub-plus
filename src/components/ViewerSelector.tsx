import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useMovieQueryStore } from "../stores";

const ViewerSelector = () => {
  const selectAllViewers = useMovieQueryStore(
    (s) => s.movieQuery.include_adult
  );
  const onSelectViewer = useMovieQueryStore((s) => s.setOnSelectViewer);

  const options = [
    { lable: "All Viewers", value: true },
    { lable: "Under 18", value: false },
  ];

  const currentViewers = options.find(
    (option) => option.value === selectAllViewers
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentViewers?.lable || "Viewers"}
      </MenuButton>
      <MenuList>
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => onSelectViewer(option.value)}>
            {option.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ViewerSelector;
