import React, { useState } from 'react';
import './index.css';

const DigiKalaStyleCategory = () => {
  const [activeMainCategory, setActiveMainCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);

  // داده‌های دسته‌بندی نمونه
  const categories = [
    {
      id: 1,
      name: 'کالای دیجیتال',
      subCategories: [
        {
          id: 11,
          name: 'لوازم جانبی موبایل',
          items: ['کیف و کاور', 'پاوربانک', 'هدست و هندزفری']
        },
        {
          id: 12,
          name: 'لپ تاپ و کامپیوتر',
          items: ['لپ تاپ', 'کیس کامپیوتر', 'مانیتور']
        }
      ]
    },
    {
      id: 2,
      name: 'خودرو و موتورسیکلت',
      subCategories: [
        {
          id: 21,
          name: 'لوازم خودرو',
          items: ['لاستیک', 'روغن موتور', 'قطعات بدنه']
        }
      ]
    },
    {
      id: 3,
      name: 'مد و پوشاک',
      subCategories: [
        {
          id: 31,
          name: 'لباس مردانه',
          items: ['پیراهن', 'شلوار', 'کت و ژاکت']
        }
      ]
    }
  ];

  const handleMainCategoryHover = (categoryId) => {
    setActiveMainCategory(categoryId);
    setShowSubMenu(true);
  };

  const handleSubCategoryHover = (subCategoryId) => {
    setActiveSubCategory(subCategoryId);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
    setActiveSubCategory(null);
  };

  return (
    <div className="flex relative ">
      <div className="main-categories bg-black">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`main-category ${activeMainCategory === category.id ? 'active' : ''}`}
            onMouseEnter={() => handleMainCategoryHover(category.id)}
          >
            {category.name}
            <span className="arrow">›</span>
          </div>
        ))}
      </div>

      {showSubMenu && activeMainCategory && (
        <div 
          className="sub-menu-container"
          onMouseLeave={handleMouseLeave}
        >
          <div className="sub-categories">
            {categories
              .find(c => c.id === activeMainCategory)
              ?.subCategories.map((subCategory) => (
                <div
                  key={subCategory.id}
                  className={`sub-category ${activeSubCategory === subCategory.id ? 'active' : ''}`}
                  onMouseEnter={() => handleSubCategoryHover(subCategory.id)}
                >
                  {subCategory.name}
                </div>
              ))}
          </div>

          <div className="category-items">
            {activeSubCategory && (
              <>
                <h3>
                  {categories
                    .find(c => c.id === activeMainCategory)
                    ?.subCategories.find(sc => sc.id === activeSubCategory)?.name}
                </h3>
                <ul>
                  {categories
                    .find(c => c.id === activeMainCategory)
                    ?.subCategories.find(sc => sc.id === activeSubCategory)
                    ?.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DigiKalaStyleCategory;