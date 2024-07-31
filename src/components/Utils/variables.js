import { useState } from 'react';
import logo_kasa from '../../img/logo_kasa.svg';
export function useMyVars() {

  const [logo] = useState(logo_kasa);

  return { logo };
}