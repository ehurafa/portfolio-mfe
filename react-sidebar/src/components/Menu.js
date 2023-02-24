import React from 'react'

const Menu = (props) => {
    const { myFunction } = props;

  return (
    <div class="mobile menu-control">
        <span onClick={ () => myFunction() }>
            <i class="fas fa-bars"></i>
            <i class="fas fa-arrow-left"></i>
        </span>
    </div>
    )
}

export default Menu