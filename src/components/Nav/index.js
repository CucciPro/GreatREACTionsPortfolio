import React from 'react';



function Nav(props) {
  const tabs = ['About Me', 'Contact', 'Resume', 'Portfolio'];

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Jose Jasso - 2020 Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
        {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
