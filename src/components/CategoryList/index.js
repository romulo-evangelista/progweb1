import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { isAuthorized } from "../../services/auth";

import './styles.css';

function CategorytList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('categories').then(response => {
      setCategories(response.data);
    }).catch(err => {
      console.log(err)
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      if(isAuthorized) {
        await api.delete(`categories/${id}`);
        setCategories(categories.filter(category => category.id !== id));
      } else {
        console.log("Sem autorização");
      }     
      
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div id="category-list">
      { categories.map(category => (
        <div key={category.id} id="category-item">
          <h1>{category.descricao}</h1>

          <div className="options">
            <Link to="categories/edit" className="button button-secondary">Editar</Link>
            <button onClick={() => handleDelete(category.id)}
              type="button"
              className="button button-delete">
                Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorytList;
