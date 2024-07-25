import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from 'features/api/apiSlice';
import { AddCategoryModal } from 'features/Categories/AddCategoryModal.jsx';

export const Categories = () => {

  const {
    data: categories,
    isLoading: categoriesLoading
  } = useGetCategoriesQuery();

  return (
    categoriesLoading ?
      'Loading...' :
      <section className="categories-list">
        <h2>Categories</h2>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))
        }
        <AddCategoryModal />
      </section>
  );
};
