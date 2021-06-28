import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;
  // useEffect render title
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {' '}
            📸
          </span>{' '}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          {/* conditional render styling if contact */}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            // conditional render styling if not contact and a category instead
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                `navActive`
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

// function Nav() {
//   const categories = [
//     {
//       name: 'commercial',
//       description:
//         'Photos of grocery stores, food trucks, and other commercial projects',
//     },
//     { name: 'portraits', description: 'Portraits of people in my life' },
//     { name: 'food', description: 'Delicious delicacies' },
//     {
//       name: 'landscape',
//       description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
//     },
//   ];

//   return (
//     <header>
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera">
//             {' '}
//             📸
//           </span>{' '}
//           Oh Snap!
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a data-testid="about" href="#about">
//               About me
//             </a>
//           </li>
//           <li>
//             <span>Contact</span>
//           </li>
//           {categories.map((category) => (
//             <li className="mx-1" key={category.name}>
//               <span onClick={() => categorySelected(category.name)}>
//                 {category.name}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// function categorySelected(name) {
//   console.log(`${name} clicked`);
// }
