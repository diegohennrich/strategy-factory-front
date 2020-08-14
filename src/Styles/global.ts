import { createGlobalStyle } from 'styled-components';
import '../../node_modules/antd/dist/antd.css';
export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing:border-box;
    }

		button {
				cursor: pointer;
		}



    body {
      background: #29166f;
      font-family: Helvetica Neue;
    }

    /* html, body {
      overflow-x: hidden;
    } */
    /* body {
      position: absolute
    } */
`;
