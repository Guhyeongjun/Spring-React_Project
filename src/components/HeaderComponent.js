import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a href='http://localhost:3000/employees' className='navbar-brand'>
              직원 관리 어플리케이션
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
