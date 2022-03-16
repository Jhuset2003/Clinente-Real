import { Planet } from 'react-planet';
import BtnFood from './Buttons/BtnFood';
import BtnHome from './Buttons/BtnHome';
import BtnMapa from './Buttons/BtnMap';
import BtnMenu from './Buttons/BtnMenu';
import "./Components-Style/Menu.css"

function Menu() {
	return (
    <div className="container-menu">
      <div className="menu">
        <Planet 
          centerContent={<BtnMenu/>}
          hideOrbit
          autoClose
          orbitRadius={63}
          rotation={240}
          bounceOnOpen
          dragableSatellites
          >
            <BtnHome/>
            <BtnMapa/>
            <BtnFood/>
            <div />
	          <div />
	          <div />
          	<div />
        </Planet>
      </div>
    </div>
	);
}
export default Menu;