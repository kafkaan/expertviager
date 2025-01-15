import { Portal, Select } from "@ark-ui/react";
import { FaArrowsUpDown } from "react-icons/fa6";

interface SelectListProps {
  name: string;
  items: string[];
  listName?: string;
  onSelect: (value: string) => void;
  selectedValue: string;
}

export const SelectList = ({
  name,
  items,
  listName,
  onSelect,
  selectedValue,
}: SelectListProps) => {
  return (
    <>
      <Select.Root
        name={name}
        value={[selectedValue]}
        items={items}
        className="select"
        onValueChange={(detail) => onSelect(detail.value[0])}
      >
        <Select.Label className="select__label text">{listName}</Select.Label>
        <Select.Control className="select__control">
          <Select.Trigger className="select__trigger">
            <Select.ValueText
              className="select__trigger__text text"
              placeholder={listName || "Selec"}
            />
            <FaArrowsUpDown
              className="select__trigger__icon"
              color="gray"
              size={15}
            />
          </Select.Trigger>
          <Select.ClearTrigger className="select__trigger__clear">
            Supprimer
          </Select.ClearTrigger>
        </Select.Control>
        <Portal>
          <Select.Positioner className="select__portal">
            <Select.Content className="select__portal__content">
              <Select.ItemGroup className="select__portal__list">
                {items.map((item) => (
                  <Select.Item
                    className="select__portal__list__item"
                    key={item}
                    item={item}
                  >
                    <Select.ItemText className="select__portal__list__item__text">
                      {item}
                    </Select.ItemText>
                    <Select.ItemIndicator>
                      {/*<Check className="select__portal__list__item__icon" />*/}
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
        <Select.HiddenSelect />
      </Select.Root>
    </>
  );
};
