import { Select } from '@kobalte/core';
import type { Component } from 'solid-js';

const App: Component = () => {
  return ( // Select default example from docs
        <Select.Root
          options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
          placeholder="Select a fruit…"
          itemComponent={props => (
            <Select.Item item={props.item}>
              <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
              <Select.ItemIndicator/>
            </Select.Item>
            )}
          >
          <Select.Trigger aria-label="Fruit">
            <Select.Value>
              {state => state.selectedOption() as string}
            </Select.Value>
            <Select.Icon/>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content>
              <Select.Listbox />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
  );
};

export default App;
