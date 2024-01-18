import React, { useCallback, useMemo, useState } from 'react';
import { ComboBox, Input, ListBox, ListBoxItem, Popover } from 'react-aria-components';
import { getTagsBySearchTerm } from '@/api/tags';
import { useQuery } from '@tanstack/react-query';
import SearchIcon from '../../assets/icons/search.svg?react';
import { titleCase } from 'title-case';

import styles from './Task1.module.scss';

type ListItem = { id: string; label: string };

const Task1: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const query = useQuery({
    queryKey: ['tags', searchTerm],
    queryFn: () => getTagsBySearchTerm(searchTerm),
    /*
      TECH DEBT: The ComboBox component is buggy when intialised with an empty array.
      Initialising with an empty string is a temporary workaround.
      See https://github.com/adobe/react-spectrum/issues/5234 for more details and to assess
      progress on a fix.
    */
    initialData: [''],
    enabled: searchTerm.length > 0,
  });

  const listItems = useMemo<ListItem[]>(() => {
    return query.data.map((tag) => ({ id: tag, label: tag }));
  }, [query.data]);

  const handleInputChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  return (
    <div className="Task1">
      <ComboBox
        inputValue={searchTerm}
        onInputChange={handleInputChange}
        items={listItems}
        aria-label="Search for vehicles"
      >
        <div className={styles.inputWrapper}>
          <SearchIcon className={styles.searchIcon} />
          <Input placeholder="Search for vehicles" type="search" />
        </div>
        <Popover className={styles.popover}>
          <ListBox className={styles.listbox}>
            {(item: ListItem) => (
              <ListBoxItem href={`/cars/${encodeURIComponent(item.label)}`}>{titleCase(item.label)}</ListBoxItem>
            )}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
};

export default Task1;
