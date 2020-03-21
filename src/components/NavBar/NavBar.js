import React, { useState, useRef, useCallback } from 'react';
import { useOnClickOutside } from '../../hooks';
import { Burger, Menu } from '../../components';

function NavBar() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const toggleOpen = useCallback(() => {
    setOpen(currentOpen => {
      return !currentOpen
    })
  }, [])

  return (
    <header ref={node}>
      <Menu open={open} toggleOpen={toggleOpen} />
      <Burger open={open} toggleOpen={toggleOpen} />
    </header>
  );
}

export default NavBar;
