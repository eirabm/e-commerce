import styles from './all-products.module.scss';
import { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import ReorderIcon from '@mui/icons-material/Reorder';
import { SideBar, Products, FeaturedProducts } from '@ecm/ui';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

/* eslint-disable-next-line */
export interface AllProductsProps {}

export function AllProducts(props: AllProductsProps) {
  const [isGrid, setIsGrid] = useState(true);
  const [sort, setSort] = useState('none');
  const [generation, setGeneration] = useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const handleGenerationChange = (event: SelectChangeEvent) => {
    setGeneration(event.target.value as string);
  };

  return (
    <div className={styles.container}>
      <FeaturedProducts />
      <h3>Filter</h3>
      <Select
        value={generation}
        label="Generation"
        onChange={handleGenerationChange}
      >
        <MenuItem value={1}>Generation 1</MenuItem>
        <MenuItem value={2}>Generation 2</MenuItem>
        <MenuItem value={3}>Generation 3</MenuItem>
        <MenuItem value={4}>Generation 4</MenuItem>
        <MenuItem value={5}>Generation 5</MenuItem>
        <MenuItem value={6}>Generation 6</MenuItem>
        <MenuItem value={7}>Generation 7</MenuItem>
      </Select>
      <Select value={sort} label="Sort" onChange={handleChange}>
        <MenuItem value={'none'}>Order by Number</MenuItem>
        <MenuItem value={'az'}>Alphabetically A-Z</MenuItem>
        <MenuItem value={'za'}>Alphabetically Z-A</MenuItem>
      </Select>

      <div className={styles.list}>
        <AppsIcon onClick={() => setIsGrid(true)} />
        <ReorderIcon onClick={() => setIsGrid(false)} />
      </div>
      <SideBar />
      <Products isGrid={isGrid} generation={generation} sort={sort} />
    </div>
  );
}

export default AllProducts;
